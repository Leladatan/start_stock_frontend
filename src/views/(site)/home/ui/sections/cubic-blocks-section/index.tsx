"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { motion } from "framer-motion";
import { colorBlocks, stats } from "../../../const";

const CubicBlocksSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
      <section className="w-full py-12 md:py-24 bg-backgrounds-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
                className="md:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
              <Card className="bg-backgrounds-indigo shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-text-light">Что такое Start Stock?</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.p
                      className="text-text-light"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Уверенный старт карьеры в креативных индустриях, поиск команды, экспертов, воплощение самых смелых карьерных возможностей.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>

            {colorBlocks.map((block, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card className={`bg-backgrounds-${['orange', 'blue', 'red'][index % 3]} shadow-lg h-full`}>
                    <CardContent className="flex items-center justify-center h-full p-6">
                      <motion.p
                          className="text-center font-semibold text-text-light"
                          animate={{
                            scale: hoveredCard === index ? 1.1 : 1,
                          }}
                          style={index === 2 ? {color: "black"} : {color: "white"}}
                      >
                        {block.text}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}

            <Card className="md:col-span-2 bg-backgrounds-blue shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-text-light">Start Stock</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                  {stats.map((stat, index) => (
                      <motion.div
                          key={index}
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
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
};

export default CubicBlocksSection;