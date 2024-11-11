import {motion} from "framer-motion";

const Particle = ({x, y}: {x: number; y: number;}) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-text-light rounded-full"
      style={{x, y}}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: Math.random() * 2 + 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default Particle;