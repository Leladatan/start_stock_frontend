"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { memo, useEffect, useState } from "react";

const FloatingIcon = memo(
  ({ Icon, delay }: { Icon: LucideIcon; delay: number }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const setRandomPosition = () => {
        if (typeof window !== "undefined") {
          setPosition({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          });
        }
      };

      setRandomPosition();
      const interval = setInterval(setRandomPosition, 20000);

      return () => clearInterval(interval);
    }, []);

    return (
      <motion.div
        className="absolute text-white/50"
        initial={position}
        animate={{
          ...position,
          rotate: 360,
        }}
        transition={{
          duration: 20,
          delay,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Icon size={24} />
      </motion.div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.Icon === nextProps.Icon && prevProps.delay === nextProps.delay;
  }
);

FloatingIcon.displayName = "FloatingIcon";

export default FloatingIcon;