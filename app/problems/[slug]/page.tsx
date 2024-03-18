import { notFound } from "next/navigation";
import { allProblems } from "contentlayer/generated";
import type { Metadata, ResolvingMetadata } from "next";

import { cn } from "@/lib/utils";
import { getTableOfContents } from "@/lib/toc";

import Mdx from "@/components/mdx";
import { DashboardTableOfContents } from "@/components/toc";
import { DocsPager } from "@/components/pager";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

type BlogsParams = {
  params: {
    slug: string;
  };
};

const getComponetFromParams = async ({ params }: BlogsParams) => {
  const blog = allProblems.find(
    (blog) => blog.slug === `problems/${params?.slug}`
  );
  return blog ? blog : null;
};

export async function generateMetadata(
  { params }: BlogsParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = await getComponetFromParams({ params });
  if (!blog) return { title: "LC Problems Solutions" };
  return {
    title: blog.title,
    description: blog.title,
  };
}

const BlogsPage = async ({ params }: BlogsParams) => {
  const blog = await getComponetFromParams({ params });
  if (!blog) return notFound();
  const toc = await getTableOfContents(blog.body.raw);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="space-y-2">
          <h1
            className={cn(
              "scroll-m-20 text-xl md:text-3xl lg:text-4xl font-bold tracking-tight"
            )}
          >
            {blog.questionNumber}. {blog.title}
          </h1>

          <div className="space-x-2">
            {blog.topics &&
              blog.topics.map((topics, id) => (
                <Badge variant={"outline"} key={id}>
                  {topics.topic}
                </Badge>
              ))}
          </div>
        </div>

        <div className="pb-12 pt-8">
          <Mdx code={blog.body.code} />{" "}
        </div>

        <DocsPager doc={blog} />
      </div>
      {blog.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                <DashboardTableOfContents toc={toc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  );
};

export default BlogsPage;
