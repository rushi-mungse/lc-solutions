"use client";

import * as ReactDOMServer from "react-dom/server";
import { CardGradientBorder } from "@/components/icons/card-gradient-border";
import { cn } from "@/lib/utils";

type CardGradientProps = {
  from?: string;
  to?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const CardGradient = ({
  children,
  className,
  from,
  to,
}: CardGradientProps) => {
  const svgString = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(
      <CardGradientBorder from={from} to={to} />
    )
  );
  return (
    <div
      // 105w x 100h
      className={cn("w-[315px] h-[300px] bg-cover p-6", className)}
      style={{ backgroundImage: `url("data:image/svg+xml,${svgString}")` }}
    >
      {children}
    </div>
  );
};
