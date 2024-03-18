import Image from "next/image";

import { cn } from "@/lib/utils";
import { GridEffect } from "@/components/kico/effects/grid-effect";
import { TagLine } from "@/components/kico/ui/heading";
import { Status } from "@/components/kico/ui/status";
import { BlurEffect } from "@/components/kico/effects/blur-effect";
import { DotEffect } from "@/components/kico/effects/dot-effect";

type ProjectCardProps = {
  borderGradient?: boolean;
  src: string;
  title: string;
  description: string;
  blurEffect?: boolean;
  gridEffect?: boolean;
  dotEffect?: boolean;
};

export const ProjectCard = ({
  borderGradient = false,
  src,
  title,
  description,
  blurEffect,
  gridEffect,
  dotEffect,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "md:flex p-[1px] rounded-[2.5rem] h-full max-w-sm",
        borderGradient ? "bg-conic-gradient" : "bg-stroke"
      )}
    >
      <div className="relative p-8 bg-card rounded-[2.4375rem] overflow-hidden xl:p-15">
        {blurEffect && <BlurEffect />}
        {dotEffect && <DotEffect />}
        {gridEffect && <GridEffect />}

        <div className="relative z-1">
          <div className="mb-10">
            <Image
              className="w-full"
              src={src}
              width={628}
              height={426}
              alt="tv image"
            />
          </div>
          <h4 className="h6 mb-4">{title}</h4>
          <p className="body-2 text-n-4 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
