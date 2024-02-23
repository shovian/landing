import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "text-sm md:text-base font-semibold py-2.5 px-4 md:py-3 md:px-8 rounded-full",
    "border border-transparent outline-none",
    "transition ease-out duration-200",
  ],
  {
    variants: {
      variant: {
        solid: [
          "bg-brand-green-primary hover:bg-brand-green-secondary text-white",
          "focus-visible:ring-2 focus-visible:ring-brand-green-subdued",
        ],
        outline: [
          "hover:bg-brand-green-primary text-brand-green-primary hover:text-white border-brand-green-primary",
          "focus-visible:ring-2 focus-visible:ring-brand-green-subdued",
        ],
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
);
