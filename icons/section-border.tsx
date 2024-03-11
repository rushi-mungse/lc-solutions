import { cn } from "@/lib/utils";
import { PlusIcon } from "@radix-ui/react-icons";

export const SectionBorder = () => {
  return (
    <>
      <PlusIcon
        className={cn(
          "hidden absolute -top-[0.4rem] left-[1.45rem] pointer-events-none lg:block xl:left-[2.1rem] font-bold text-active"
        )}
      />

      <PlusIcon
        className={cn(
          "hidden absolute -top-[0.4rem] right-[1.45rem] pointer-events-none lg:block xl:right-[2.1rem] font-bold text-active"
        )}
      />
    </>
  );
};
