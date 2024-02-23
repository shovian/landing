import {
  HTMLAttributes,
  type ElementType,
  type FC,
  type ReactNode,
} from "react";

import { cn } from "@kawanbantu/utils";

export type SectionHeaderProps = {
  as?: ElementType;
  className?: HTMLAttributes<HTMLElement>["className"];
  heading?: ReactNode;
  message?: ReactNode;
  styles?: {
    heading?: string;
    message?: string;
  };
};

export const SectionHeader: FC<SectionHeaderProps> = ({
  as: Component = "h2",
  className,
  heading,
  message,
  styles = { heading: "", message: "" },
}) => {
  return (
    <header className={cn("flex flex-col items-center gap-4", className)}>
      <Component
        className={cn("font-bold text-2xl md:text-3xl lg:text-[40px] lg:leading-[56px]", styles.heading)}
      >
        {heading}
      </Component>
      <p
        className={cn("text-base md:text-lg md:leading-[32px] text-secondary", styles.message)}
      >
        {message}
      </p>
    </header>
  );
};
