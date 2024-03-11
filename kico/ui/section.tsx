// import SectionSvg from "../assets/svg/SectionSvg";

import { SectionBorder } from "@/icons/section-border";
import { cn } from "@/lib/utils";

type SectionProps = {
  crosses?: boolean;
  customPaddings?: string;
  topBorder?: boolean;
  children: React.ReactNode;
};

const Section = ({ crosses, children, topBorder }: SectionProps) => {
  return (
    <div className={cn("relative py-10 lg:py-16 xl:py-20")}>
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && <SectionBorder />}

      {topBorder && (
        <div
          className={cn(
            "hidden absolute top-0 left-0 right-0 h-0.25 bg-stroke pointer-events-none lg:block"
          )}
        />
      )}
    </div>
  );
};

export default Section;
