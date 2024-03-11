"use client";

import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-screen border-b backdrop-blur">
      <MainNav />
      <MobileNav />
    </header>
  );
}
