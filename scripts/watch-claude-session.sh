#!/usr/bin/env bash
#
# watch-claude-session.sh — safety-net watchdog for a Claude Code session that
# hung once today (dead Anthropic API socket, frozen transcript). Polls every
# INTERVAL for DURATION and ALERTS (desktop + bell + voice + log) if the session
# looks genuinely stalled. It never kills anything — on a stall it just prints
# the exact recovery command for you to paste.
#
# Why the multi-signal check: the watched session legitimately goes quiet while
# running a *background workflow* (main transcript flat for 10+ min while
# sub-agents write files). So a flat transcript alone is NOT a stall. We treat
# the session as HEALTHY if ANY of these happened in the last interval:
#   - the main transcript grew (main loop did something)
#   - project files were written (a tool/workflow is producing output)
#   - the process was caught in 'R' state (actively running on CPU)
#   - it holds many live API sockets (workflow fan-out / active requests)
# A stall is only declared when ALL signals are cold for STALL_CHECKS in a row.
#
# Usage:
#   ./watch-claude-session.sh [TRANSCRIPT] [PID] [INTERVAL_SEC] [DURATION_SEC]
# Defaults target the session we diagnosed today (PID 94493 / 78c8fbdf…).

set -uo pipefail

# ---- config / args -------------------------------------------------------
TXDIR="/Users/akungapaul/.claude/projects/-Users-akungapaul-Projects-Newarkqualityroofing"
PROJDIR="/Users/akungapaul/Projects/Newarkqualityroofing"
SELF_NAME="$(basename "$0")"

TRANSCRIPT="${1:-$TXDIR/78c8fbdf-d6a0-4bd0-ac66-e2560ee55e20.jsonl}"
PID="${2:-94493}"
INTERVAL="${3:-300}"        # 5 minutes
DURATION="${4:-10800}"      # 3 hours
STALL_CHECKS="${STALL_CHECKS:-3}"   # consecutive cold checks -> stall (~15 min)
SOCK_HEALTHY_MIN="${SOCK_HEALTHY_MIN:-5}"  # > this many API sockets = clearly working

CHECKS=$(( DURATION / INTERVAL ))
TS="$(date +%Y%m%d-%H%M%S)"
LOG="$PROJDIR/scripts/logs/session-watch-$TS.log"
MARKER="$(mktemp -t nqrwatch.XXXXXX)"
trap 'rm -f "$MARKER"' EXIT

# ---- helpers -------------------------------------------------------------
log() { printf '%s\n' "$*" | tee -a "$LOG"; }

proc_alive() { ps -p "$PID" >/dev/null 2>&1; }
proc_state() { ps -o stat= -p "$PID" 2>/dev/null | tr -d ' '; }

# sample state a handful of times to catch brief 'R' (running) bursts
running_seen() {
  local i st
  for i in 1 2 3 4 5; do
    st="$(proc_state)"
    case "$st" in *R*) echo Y; return;; esac
    sleep 0.5
  done
  echo N
}

api_sockets() { lsof -p "$PID" 2>/dev/null | grep -iE 'TCP' | grep -vc localhost; }
tx_lines()    { wc -l < "$TRANSCRIPT" 2>/dev/null | tr -d ' '; }

# count project files modified since MARKER was last touched (excludes noise)
files_written_since_marker() {
  find "$PROJDIR" -type f -newer "$MARKER" \
    -not -path '*/node_modules/*' -not -path '*/.git/*' -not -path '*/.next/*' \
    -not -path '*/scripts/logs/*' -not -name "$SELF_NAME" 2>/dev/null | wc -l | tr -d ' '
}

alert() {
  local msg="$1"
  printf '\a'  # terminal bell
  command -v osascript >/dev/null 2>&1 && \
    osascript -e "display notification \"$msg\" with title \"Claude session watchdog\" sound name \"Basso\"" >/dev/null 2>&1
}
speak_once() {
  command -v say >/dev/null 2>&1 && say "Claude session may be stuck" >/dev/null 2>&1 &
}

# ---- start ---------------------------------------------------------------
log "============================================================"
log "Claude session watchdog  —  started $(date '+%F %T')"
log "  transcript : $TRANSCRIPT"
log "  pid        : $PID"
log "  interval   : ${INTERVAL}s    duration: ${DURATION}s    checks: $CHECKS"
log "  stall after: $STALL_CHECKS cold checks (~$(( STALL_CHECKS * INTERVAL / 60 )) min)"
log "  log file   : $LOG"
log "============================================================"

if ! proc_alive; then
  log "[$(date '+%T')] PID $PID is not running — nothing to watch. Exiting."
  exit 0
fi

prev_lines="$(tx_lines)"
flat=0
spoke=0

for (( i=1; i<=CHECKS; i++ )); do
  touch "$MARKER"          # mark window start
  sleep "$INTERVAL"
  now="$(date '+%F %T')"

  if ! proc_alive; then
    log "[$now] #$i/$CHECKS  process $PID is GONE — session ended (finished / killed / resumed elsewhere). Stopping."
    alert "Watched Claude session (PID $PID) ended"
    break
  fi

  cur="$(tx_lines)"
  dlines=$(( cur - prev_lines ))
  files="$(files_written_since_marker)"
  rseen="$(running_seen)"
  socks="$(api_sockets)"
  st="$(proc_state)"
  prev_lines="$cur"

  # any positive signal => healthy
  healthy=0; reasons=""
  (( dlines > 0 ))            && { healthy=1; reasons="$reasons +${dlines}lines"; }
  (( files  > 0 ))           && { healthy=1; reasons="$reasons +${files}files"; }
  [ "$rseen" = "Y" ]         && { healthy=1; reasons="$reasons running"; }
  (( socks > SOCK_HEALTHY_MIN )) && { healthy=1; reasons="$reasons ${socks}socks"; }

  if (( healthy == 1 )); then
    flat=0; spoke=0
    log "[$now] #$i/$CHECKS  OK   state=$st socks=$socks ->$reasons"
  else
    flat=$(( flat + 1 ))
    log "[$now] #$i/$CHECKS  COLD state=$st socks=$socks lines=$cur (no growth/files/run)  cold=$flat/$STALL_CHECKS"
    if (( flat >= STALL_CHECKS )); then
      mins=$(( flat * INTERVAL / 60 ))
      log "[$now] *** STALL SUSPECTED *** no activity for ~${mins} min."
      log "    Recover in that session's terminal:  Esc  then type: continue"
      log "    Or hard reset:                        kill $PID && claude --resume   # pick the 78c8fbdf session"
      alert "Claude session may be STUCK (~${mins} min idle) — Esc+continue or kill $PID"
      (( spoke == 0 )) && { speak_once; spoke=1; }
    fi
  fi
done

log "[$(date '+%F %T')] watchdog window complete after $CHECKS checks. Exiting."
