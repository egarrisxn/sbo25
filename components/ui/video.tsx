"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { CloseIcon, PlayIcon } from "@/components/icons";
import type { VideoAnimationStyle, VideoAnimationVariants } from "@/lib/types";

const videoAnimationVariants: Record<
  VideoAnimationStyle,
  VideoAnimationVariants
> = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

interface VideoProps {
  videoAnimationStyle?: VideoAnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

export function Video({
  videoAnimationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: VideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = videoAnimationVariants[videoAnimationStyle];

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsVideoOpen(false);
    }
    if (isVideoOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVideoOpen]);

  return (
    <div className={cn("relative", className)}>
      <button
        type='button'
        aria-label='Play video'
        className='group relative h-auto w-full cursor-pointer'
        onClick={() => setIsVideoOpen(true)}
      >
        <Image
          src={thumbnailSrc}
          alt={thumbnailAlt}
          width={1920}
          height={1080}
          unoptimized
          className='w-full rounded-lg border-2 border-foreground shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]'
        />
        <div className='absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100'>
          <div className='flex size-28 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md'>
            <div className='relative flex size-20 scale-100 items-center justify-center rounded-full bg-linear-to-b from-primary/20 to-primary shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]'>
              <PlayIcon className='size-7 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105 dark:fill-slate-900 dark:text-slate-900' />
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.currentTarget === e.target) setIsVideoOpen(false);
            }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md'
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className='relative mx-4 aspect-video w-full max-w-4xl md:mx-0'
            >
              <motion.button
                type='button'
                className='absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black'
                onClick={() => setIsVideoOpen(false)}
                aria-label='Close video'
              >
                <CloseIcon className='size-5' />
              </motion.button>

              <div className='relative isolate size-full overflow-hidden rounded-2xl border-2 border-white'>
                <iframe
                  src={videoSrc}
                  className='size-full rounded-2xl'
                  allowFullScreen
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
