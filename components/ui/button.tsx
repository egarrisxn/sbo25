import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-full text-sm font-semibold relative transition-all overflow-hidden disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "text-gray-50 bg-gradient-to-b from-[#232326] to-[#353538] shadow-[inset_-4px_-4px_4px_rgba(0,0,16,0.2),inset_0px_1px_2px_rgba(0,0,16,0.7),inset_4px_-4px_4px_rgba(0,0,16,0.2),0px_4px_10px_rgba(0,0,16,0.16),inset_0px_2px_3px_rgba(0,0,16,0.2),inset_0px_3px_6px_rgba(255,255,255,0.32)] hover:shadow-[inset_-2px_-2px_3px_rgba(0,0,16,0.25),inset_0px_1px_2px_rgba(0,0,16,0.7),inset_2px_-2px_3px_rgba(0,0,16,0.25),0px_3px_8px_rgba(0,0,16,0.2),inset_0px_2px_3px_rgba(0,0,16,0.25),inset_0px_3px_6px_rgba(255,255,255,0.3)] active:shadow-[inset_-2px_-2px_2px_rgba(0,0,16,0.2),inset_0px_1px_2px_rgba(0,0,16,0.6),inset_2px_-2px_2px_rgba(0,0,16,0.2),0px_2px_5px_rgba(0,0,16,0.16),inset_0px_2px_3px_rgba(0,0,16,0.2),inset_0px_3px_6px_rgba(255,255,255,0.25)] before:absolute before:inset-0 before:z-0 before:bg-gradient-to-b before:from-[#232326] before:to-[#353538] before:opacity-0 before:transition-opacity before:duration-150 hover:before:opacity-100 after:absolute after:inset-0 after:z-0 after:bg-gradient-to-b after:from-[#1f1f21] after:to-[#2f2f32] after:opacity-0 after:transition-opacity after:duration-150 active:after:opacity-100 disabled:bg-gradient-to-b disabled:from-[#2b2b2d] disabled:to-[#353537] disabled:text-gray-500 disabled:shadow-none",
        secondary:
          "bg-purple-200/25 text-purple-950 border border-purple-400/30 shadow-lg shadow-purple-400/30 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] relative before:absolute before:inset-0 before:rounded-full before:bg-purple-300/20 before:opacity-0 before:transition-opacity hover:before:opacity-50 after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-t from-purple-400/25 to-transparent after:opacity-0 after:transition-opacity active:after:opacity-60",
        outline:
          "border border-purple-800/30 bg-white/5 text-black shadow-md shadow-purple-600/20 backdrop-blur-lg transition-all duration-150 before:absolute before:inset-0 before:rounded-full before:bg-purple-300/20 before:opacity-0 before:transition-opacity before:duration-150 after:absolute after:inset-0 after:rounded-full after:bg-purple-400/30 after:opacity-0 after:transition-opacity after:duration-150 hover:scale-[1.02] hover:before:opacity-40 active:scale-[0.98] active:after:opacity-50 dark:text-white",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-400",
        ghost:
          "bg-transparent text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-5 py-2.5 has-[>svg]:px-3",
        sm: "px-4 py-2 has-[>svg]:px-2.5",
        lg: "px-6 py-3 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className='relative z-10 flex w-full items-center justify-center overflow-hidden'>
        {props.children}
      </span>
    </Comp>
  );
}

export { Button, buttonVariants };
