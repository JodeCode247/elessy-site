import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="border-b border-line bg-site pt-[calc(72px+3rem)] pb-12 md:pb-16 lg:pt-[calc(84px+5rem)] lg:pb-20">
      <div className="container-page">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-[22ch] text-h1">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lead text-steel">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
