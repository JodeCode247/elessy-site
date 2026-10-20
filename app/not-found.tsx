import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70svh] flex-col items-start justify-center pt-28">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-h1">This page could not be found.</h1>
      <p className="mt-4 max-w-md text-steel">The link may be out of date. Head back to the home page or make an enquiry.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="/">Back to home</Button><Button href="/contact" variant="outline">Make an enquiry</Button></div>
    </section>
  );
}
