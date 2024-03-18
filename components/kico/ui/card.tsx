import React from "react";
import { DotEffect } from "@/components/kico/effects/dot-effect";
import { ButtonLink } from "@/components/kico/ui/button-link";

type TopicCardProps = {
  card: {
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonTitle: string;
    buttonHref: string;
  };
};

export const Card = ({ card }: TopicCardProps) => {
  return (
    <div className="max-w-[350px] h-full glass-effect">
      <div className="flex items-center justify-center">
        <div className="relative glass-effect w-full p-8 flex items-center justify-center">
          <DotEffect />
          {card.icon}
        </div>
      </div>
      <h6 className="h6 text-foreground py-4">{card.title}</h6>
      <p className="text-foreground text-sm font-thin pb-6">
        {card.description}
      </p>

      <ButtonLink buttonTitle={card.buttonTitle} buttonHref={card.buttonHref} />
    </div>
  );
};
