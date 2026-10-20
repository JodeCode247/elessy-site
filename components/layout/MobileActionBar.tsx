import Link from "next/link";
import { MessageCircle, MousePointerClick, Phone } from "lucide-react";
import { site } from "@/lib/site";

// Sticky, thumb-reachable actions. Visible below the lg breakpoint only.
export function MobileActionBar() {
  const item = "flex min-h-[56px] flex-1 flex-col items-center justify-center gap-1 text-[12px] font-bold font-display transition-colors active:bg-brand-deep";
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-brand pb-[env(safe-area-inset-bottom)] text-white lg:hidden">
      <div className="flex">
        <a href={site.phoneHref} className={item}><Phone aria-hidden className="h-5 w-5" />Call</a>
        <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className={item}><MessageCircle aria-hidden className="h-5 w-5" />WhatsApp</a>
        <Link href="/contact" className={`${item} text-signal`}><MousePointerClick aria-hidden className="h-5 w-5" />Enquire</Link>
      </div>
    </nav>
  );
}
