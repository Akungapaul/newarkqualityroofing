'use client';
import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preconnect('https://maps.googleapis.com', { crossOrigin: 'anonymous' });
  ReactDOM.prefetchDNS('https://rest.gohighlevel.com');
  return null;
}
