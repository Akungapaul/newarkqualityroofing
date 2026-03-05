import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-parchment px-4 text-center">
      <h1 className="font-heading text-6xl font-bold text-forest">404</h1>
      <h2 className="mt-4 font-heading text-2xl font-semibold text-forest-light">
        Page Not Found
      </h2>
      <p className="mt-4 max-w-md font-body text-lg text-text-secondary">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-sm border-2 border-copper bg-copper px-8 py-3 font-heading text-lg font-semibold text-text-on-copper transition-colors hover:bg-copper-dark"
      >
        Go Home
      </Link>
    </div>
  );
}
