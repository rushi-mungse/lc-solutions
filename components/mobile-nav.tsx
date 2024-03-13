"use client";

import { useState } from "react";
import Link, { LinkProps } from "next/link";

import { cn } from "@/lib/utils";
import { navConfig } from "@/config/nav";
import { MenuIcon } from "@/components/icons/menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LogoLink } from "@/components/logo-link";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex container md:hidden h-14 max-w-screen-2xl items-center justify-between">
      <LogoLink />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="pr-0">
          <div className="flex items-center space-x-2">
            <ModeToggle />
          </div>

          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
            {navConfig.mainNav.map((nav, index) => (
              <MobileLink
                href={nav.href!}
                onOpenChange={setOpen}
                className="flex items-center py-2 text-sm text-foreground/60"
                key={index}
              >
                {nav.title}
              </MobileLink>
            ))}
          </ScrollArea>
        </SheetContent>

        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <MenuIcon className="size-6" />
          </Button>
        </SheetTrigger>
      </Sheet>
    </div>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => onOpenChange?.(false)}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
