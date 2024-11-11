"use client";

import {motion, useAnimation, useInView} from "framer-motion";
import {ReactNode, useEffect, useRef} from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const AnimatedCard = ({children, className = ""}: Props) => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, {once: true})

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {opacity: 1, scale: 1, y: 0},
        hidden: {opacity: 0, scale: 0.8, y: 50},
      }}
      transition={{duration: 0.5}}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      className={`${className} cursor-pointer`}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard;