import { GridEffect } from "@/kico/effects/grid-effect";
import { TagLine } from "@/kico/ui/heading";
import { Status } from "./status";
import Image from "next/image";
import { BlurEffect } from "../effects/blur-effect";
import { cn } from "@/lib/utils";
import { DotEffect } from "../effects/dot-effect";

type ProjectCardProps = {
  borderGradient?: boolean;
  tag: string;
  src: string;
  title: string;
  description: string;
  status: "done" | "inProgress" | "pending";
  blurEffect?: boolean;
  gridEffect?: boolean;
  dotEffect?: boolean;
};

export const ProjectCard = ({
  borderGradient = false,
  tag,
  src,
  title,
  description,
  status,
  blurEffect,
  gridEffect,
  dotEffect,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "md:flex even:md:translate-y-[7rem] p-[1px] rounded-[2.5rem] h-fit",
        borderGradient ? "bg-conic-gradient" : "bg-stroke"
      )}
    >
      <div className="relative p-8 bg-card rounded-[2.4375rem] overflow-hidden xl:p-15">
        {blurEffect && <BlurEffect />}
        {dotEffect && <DotEffect />}
        {gridEffect && <GridEffect />}
        <div className="relative z-1">
          <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
            <TagLine>{tag}</TagLine>
            <Status status={status} />
          </div>

          <div className="mb-10 -my-10 -mx-15">
            <Image
              className="w-full"
              src={src}
              width={628}
              height={426}
              alt="tv image"
            />
          </div>
          <h4 className="h4 mb-4">{title}</h4>
          <p className="body-2 text-n-4">{description}</p>
        </div>
      </div>
    </div>
  );
};
