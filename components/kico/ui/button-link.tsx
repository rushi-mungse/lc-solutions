import { cn } from "@/lib/utils";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import Link from "next/link";

type ButtonLinkProps = {
  className?: string;
  buttonHref: string;
  buttonTitle: string;
};

export const ButtonLink = ({
  className,
  buttonHref,
  buttonTitle,
}: ButtonLinkProps) => {
  return (
    <Link
      href={buttonHref}
      className={cn(
        "group z-10 w-fit flex items-center space-x-3 outline-none border border-foreground/50 rounded-lg bg-transparent px-7 py-2 font-thin text-xs tracking-wider text-foreground/90 hover:text-foreground transition-all",
        className
      )}
    >
      <span>{buttonTitle}</span>
      <span className="z-10 group-hover:translate-x-1">
        <MdOutlineArrowCircleRight className="size-4" />
      </span>
    </Link>
  );
};
