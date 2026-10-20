export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="flex min-h-[60svh] items-center justify-center">
      <span className="sr-only">Loading</span>
      <span aria-hidden className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-brand" />
    </div>
  );
}
