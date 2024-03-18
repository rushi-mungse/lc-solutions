"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { LogoLink } from "@/components/logo-link";
import { ModeToggle } from "@/components/mode-toggle";

import { SlFire } from "react-icons/sl";
import { dailyQuestion } from "@/constants";

export const MainNav = () => {
  const pathname = usePathname();
  return (
    <div className="hidden container md:flex h-14 max-w-screen-2xl items-center justify-between">
      <div className="mr-4 flex">
        <LogoLink />
        <nav className="flex items-center gap-6 text-sm font-light">
          <Link
            href="/problems"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname.startsWith("/problems")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Problems
          </Link>

          <Link
            href="/contest"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname.startsWith("/contest")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Contest
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-3">
        <Link href={dailyQuestion.buttonHref}>
          <SlFire className="hover:text-yellow-500 transition-all" />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};
