import { ButtonHTMLAttributes, forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";

import { cn } from "@kawanbantu/utils";

import { buttonVariants } from ".";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
} & VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, variant, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        {...props}
        ref={ref}
        className={cn(buttonVariants({ className, variant }))}
      />
    );
  }
);
