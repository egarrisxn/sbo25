import * as motion from "motion/react-client";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const blurVariants = cva("will-change-transform", {
  variants: {
    strength: {
      sm: "blur-[2px]",
      md: "blur-[6px]",
      lg: "blur-[10px]",
    },
    direction: {
      up: "translate-y-[-8px]",
      down: "translate-y-[8px]",
      none: "",
    },
  },
  defaultVariants: {
    strength: "md",
    direction: "up",
  },
});

type BlurVariantProps = VariantProps<typeof blurVariants>;

interface MotionVariants {
  [key: string]: {
    [property: string]: any;
    transition?: { [key: string]: any };
  };
}

interface BlurProps extends BlurVariantProps {
  className?: string;
  children: React.ReactNode;
  variant?: MotionVariants;
  duration?: number;
  delay?: number;
}

// For items (blocks like cards, sections)
export function BlurItem({
  className,
  children,
  variant,
  duration = 0.4,
  delay = 0.4,
  strength,
  direction,
}: BlurProps) {
  const defaultVariants: MotionVariants = {
    hidden: { y: 6, opacity: 0, filter: "blur(6px)" },
    visible: { y: -6, opacity: 1, filter: "blur(0px)" },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      variants={combinedVariants}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      className={cn(blurVariants({ strength, direction }), className)}
    >
      {children}
    </motion.div>
  );
}

// For inline text
export function BlurText({
  className,
  children,
  variant,
  duration = 0.4,
  delay = 0,
  strength,
  direction,
}: BlurProps) {
  const defaultVariants: MotionVariants = {
    hidden: { y: 8, opacity: 0, filter: "blur(6px)" },
    visible: { y: -8, opacity: 1, filter: "blur(0px)" },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.span
      initial='hidden'
      whileInView='visible'
      variants={combinedVariants}
      viewport={{ once: true }}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      className={cn(
        "inline-block",
        blurVariants({ strength, direction }),
        className
      )}
    >
      {children}
    </motion.span>
  );
}
