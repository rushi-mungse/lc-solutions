import { SidebarNavItem } from "@/types/nav";

type BlogsConfigType = {
  sidebarNav: SidebarNavItem[];
};

const blogsConfig: BlogsConfigType = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/blogs/introduction",
          items: [],
        },
      ],
    },
    {
      title: "Blogs",
      items: [
        {
          title: "Blog 1",
          href: "/blogs/blog-1",
          items: [],
        },
        {
          title: "Blog 2",
          href: "/blogs/blog-2",
          items: [],
        },
      ],
    },
    {
      title: "More About Us",
      items: [
        {
          title: "More 1",
          href: "/blogs/more-1",
          items: [],
        },
        {
          title: "More 2",
          items: [{ title: "More 2 A", href: "/blogs/more 2/A", items: [] }],
        },
      ],
    },
  ],
};

export default blogsConfig;
