import { Armchair, Compass, Droplets, HardHat, Package, RadioTower, Ruler, Sun, Waves, Zap,Hammer } from "lucide-react";
import type { Service } from "@/lib/content";

const map = {
  ruler: Ruler, compass: Compass, hardhat: HardHat, zap: Zap, sun: Sun,
  droplets: Droplets, radio: RadioTower, armchair: Armchair, waves: Waves, package: Package,wrench:Hammer,
} as const;

export function ServiceIcon({ name, className }: { name: Service["icon"]; className?: string }) {
  const Icon = map[name];
  return <Icon aria-hidden className={className} strokeWidth={1.75} />;
}