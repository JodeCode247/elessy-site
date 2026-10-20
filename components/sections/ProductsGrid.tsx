"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { productCategories, products, type ProductCategory } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProductsGrid() {
  const [cat, setCat] = useState<ProductCategory>("All");
  const shown = products.filter((p) => cat === "All" || p.category === cat);
  return (
    <section aria-label="Product catalogue" className="section-y">
      <div className="container-page">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {productCategories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={cn("min-h-[44px] rounded-full border px-5 font-display text-[15px] font-bold transition-colors", cat === c ? "border-brand bg-brand text-white" : "border-line bg-white text-ink hover:border-brand")}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">{shown.length} products shown</p>
        {shown.length === 0 ? (
          <p className="mt-12 text-steel">No products in this category yet. Contact us for availability.</p>
        ) : (
          <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <li key={p.name} className="group">
                <div className="relative aspect-[8/5] overflow-hidden bg-brand-deep">
                  <Image src={p.image} alt={p.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <h2 className="mt-5 text-h3">{p.name}</h2>
                <p className="mt-1 text-[15px] text-steel">Supply &middot; Install &middot; Service</p>
                <Link href={`/contact?service=${encodeURIComponent("Products and equipment supply")}&product=${encodeURIComponent(p.name)}`} className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-display text-[15px] font-bold text-brand hover:underline">
                  Request a quote <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
