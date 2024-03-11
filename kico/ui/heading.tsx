import React from "react";
import { brackets } from "@/icons/bracketes";
import { cn } from "@/lib/utils";

export const TagLine = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("tagline flex items-center", className)}>
      {brackets("left")}
      <div className="mx-3 text-sm">{children}</div>
      {brackets("right")}
    </div>
  );
};

type HeadingProps = {
  title?: string;
  text?: string;
  tag?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Heading = ({ className, title, text, tag }: HeadingProps) => {
  return (
    <div
      className={cn(
        "max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center",
        className
      )}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
};
