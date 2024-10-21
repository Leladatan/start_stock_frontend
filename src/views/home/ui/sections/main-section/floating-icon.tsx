import {motion} from "framer-motion";
import {LucideIcon} from "lucide-react";
import {memo} from "react";

const FloatingIcon = memo(
  ({Icon, delay}: { Icon: LucideIcon; delay: number; }) => {
    return (
      <motion.div
        className="absolute text-white/50"
        initial={{x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight}}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          rotate: 360,
        }}
        transition={{
          duration: 20,
          delay,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Icon size={24}/>
      </motion.div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.Icon === nextProps.Icon && prevProps.delay === nextProps.delay;
  }
);

FloatingIcon.displayName = "FloatingIcon";

export default FloatingIcon;