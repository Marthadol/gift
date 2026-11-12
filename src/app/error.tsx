"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return <main className="access-content"><h1>We couldn’t open<br />this page.</h1><p>Please try again in a moment.</p><button className="primary-button" onClick={reset}>Try again</button></main>;
}
