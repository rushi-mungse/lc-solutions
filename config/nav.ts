import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface ComponentConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const navConfig: ComponentConfig = {
  mainNav: [
    {
      title: "Problems",
      href: "/problems",
    },
    {
      title: "Contest",
      href: "/contest",
    },
  ],
  sidebarNav: [],
};
