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
        {
          title: "452. Minimum Number of Arrows to Burst Balloons",
          href: "/problems/minimum-number-of-arrows-to-burst-balloons",
          items: [],
        },
        {
          title: "621. Task Scheduler",
          href: "/problems/task-scheduler",
          items: [],
        },
      ],
    },
  ],
};

export default problemsConfig;
