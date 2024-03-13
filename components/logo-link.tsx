import Link from "next/link";

import { LogoIcon } from "@/components/icons/logo";
import { siteConfig } from "@/config/site";

export function LogoLink() {
  return (
    <Link href="/" className="mr-12 flex items-center space-x-1">
      <LogoIcon className="size-6" />
      <span className="font-bold">{siteConfig.name}</span>
    </Link>
  );
}
