"use client";

import { Button } from "@/components/ui/Button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="container-page flex min-h-[70svh] flex-col items-start justify-center pt-28">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="mt-3 text-h1">We could not load this page.</h1>
      <Button className="mt-8" onClick={reset}>Try again</Button>
    </section>
  );
}
