"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { colorBlocks, stats } from "../../../const";

const CubicBlocksSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full pb-6 md:pb-12 bg-backgrounds-light"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        <motion.div variants={itemVariants} className="w-full h-full md:w-3/5">
          <Card className="bg-backgrounds-indigo shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-text-light">Что такое Start Stock?</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-text-light">
                Уверенный старт карьеры в креативных индустриях, поиск команды, экспертов, воплощение самых смелых
                карьерных возможностей.
              </p>
              <div className="flex flex-col gap-4 mt-4">
                {colorBlocks.map((block, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4 p-4 bg-backgrounds-light rounded-lg shadow-md"
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 bg-backgrounds-indigo text-text-light rounded-full flex items-center justify-center font-bold"
                    >
                      {index + 1}
                    </div>
                    <p className="text-md text-text-indigo flex-grow">{block.text}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full h-full md:w-2/5">
          <Card className="bg-backgrounds-blue shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-text-light">Start Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4 p-2 rounded-lg transition-colors duration-300 hover:bg-backgrounds-light hover:bg-opacity-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-text-orange"
                      whileHover={{ scale: 1.2 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-text-light">{stat.text}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CubicBlocksSection;