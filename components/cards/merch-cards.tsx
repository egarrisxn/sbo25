"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, PanInfo } from "motion/react";
import { merchCards } from "@/lib/data";

export default function MerchCards() {
  const [stack, setStack] = useState(merchCards);
  const [isSwiping, setIsSwiping] = useState(false);
  const autoSwipeTimeout = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleSwipeComplete = useCallback(
    (direction: "left" | "right") => {
      if (isSwiping) return;
      setIsSwiping(true);

      setStack((prev) => {
        if (direction === "left") {
          return [...prev.slice(1), prev[0]];
        } else {
          return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
        }
      });

      setTimeout(() => setIsSwiping(false), 300);
    },
    [isSwiping]
  );

  useEffect(() => {
    autoSwipeTimeout.current = setInterval(
      () => handleSwipeComplete("left"),
      5000
    );
    return () => {
      if (autoSwipeTimeout.current) clearInterval(autoSwipeTimeout.current);
    };
  }, [handleSwipeComplete]);

  return (
    <div className='relative h-96 w-72 sm:h-120 sm:w-96'>
      {stack.map((card, index) => {
        const isTopCard = index === 0;
        const scaleFactor = 1 - index * 0.03;
        const spreadFactor = index * 6;
        const rotationAngle = index * 3;

        return (
          <motion.div
            key={card.id}
            className='absolute flex size-fit max-w-68 min-w-48 flex-col justify-between rounded-3xl border bg-white p-2 shadow-xl xs:min-h-96 xs:max-w-104 xs:min-w-76 sm:min-h-120 sm:min-w-96 dark:bg-black'
            style={{ zIndex: stack.length - index }}
            animate={{
              scale: scaleFactor,
              x: spreadFactor,
              rotate: rotationAngle,
              y: index * 6,
            }}
            drag={isTopCard ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(
              event: MouseEvent | TouchEvent | PointerEvent,
              info: PanInfo
            ) => {
              if (!isTopCard || isSwiping) return;
              if (info.offset.x < -50) handleSwipeComplete("left");
              else if (info.offset.x > 50) handleSwipeComplete("right");
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className='relative flex flex-row items-center justify-center rounded-3xl'>
              <Image
                src={card.src || "/shared/image-not-found.png"}
                alt={card.title}
                width={384}
                height={550}
                priority
                className='pointer-events-none flex rounded-2xl object-cover'
              />
            </div>
            <div>
              <p className='absolute bottom-10 left-5 text-sm font-medium text-black'>
                {card.title}
              </p>
              <p className='absolute bottom-5 left-5 text-sm text-slate-700'>
                {card.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
