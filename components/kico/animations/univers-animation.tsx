"use client";

import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import { PlusIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-red-400 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-red-400 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[30rem] md:w-[40rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[20rem] md:w-[30rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[10rem] md:w-[20rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[5rem] md:w-[10rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

type UniversAnimationProps = {
  parallaxRef?: React.MutableRefObject<any> | null;
};

export const UniversAnimation = ({ parallaxRef }: UniversAnimationProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 w-[40rem] md:w-[50rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2">
      <Rings />

      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-[46deg]">
          <div
            className={cn(
              "w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <div
            className={cn(
              "w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
          <div
            className={cn(
              "hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <div
            className={cn(
              "w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <div
            className={cn(
              "w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={cn(
              "w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
