import { SidebarNavItem } from "@/types/nav";

type BlogsConfigType = {
  sidebarNav: SidebarNavItem[];
};

const problemsConfig: BlogsConfigType = {
  sidebarNav: [
    {
      title: "Problems",
      items: [
        {
          title: "1.Two Sum",
          href: "/problems/two-sum",
          items: [],
        },
      ],
    },
  ],
};

export default problemsConfig;
