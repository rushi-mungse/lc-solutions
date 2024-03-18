import React from "react";
import { BlurEffect } from "../effects/blur-effect";
import Image from "next/image";
import { ButtonLink } from "./button-link";

type CardWithImageProps = {
  src: string;
  title: string;
  description: string;
  buttonHref: string;
  buttonTitle: string;
};

export const CardWithImage = ({
  src,
  title,
  description,
  buttonHref,
  buttonTitle,
}: CardWithImageProps) => {
  return (
    <div className="max-w-[350px] glass-effect">
      <div className="z-10">
        <Image src={src} width={500} height={60} alt="video" />

        <h6 className="h6 text-foreground py-4">{title}</h6>

        <p className="text-foreground text-sm font-thin mb-8">{description}</p>

        <ButtonLink buttonTitle={buttonTitle} buttonHref={buttonHref} />
      </div>
    </div>
  );
};
