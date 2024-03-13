import { cn } from "@/lib/utils";
import { ButtonBorder } from "@/components/icons/button-border";

type ButtonProps = {
  color?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className,
  children,
  color,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "button relative inline-flex items-center justify-center h-11 transition-colors px-7 ",
        color
          ? "text-n-8 hover:text-n-5"
          : "text-n-1 hover:text-muted-foreground",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <ButtonBorder color={color} />
    </button>
  );
};
