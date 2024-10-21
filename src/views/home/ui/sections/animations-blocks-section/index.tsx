"use client";

import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Button } from "@/shared/components/ui/button";
import { Parallax } from "react-parallax";
import { bonusItems } from "@/views/home/const";
import FloatingIcon from "@/views/home/ui/sections/main-section/floating-icon";

const AnimationsBlocksSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollY, [0, 1], [100, -100]);
  const opacity = useTransform(scrollY, [0, 0.5, 1], [0, 1, 0]);

  const springConfig = { stiffness: 300, damping: 30 }
  const scale = useSpring(1, springConfig);

  const floatingIcons = bonusItems.map((item) => ({
    icon: item.icon,
    delay: Math.random() * 2,
  }));

  const combinedIcons = [...floatingIcons, ...floatingIcons, ...floatingIcons];

  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      bgImageAlt="Bonus System Background"
      strength={200}
    >
      <section ref={containerRef} className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 sm:opacity-25 md:opacity-50 lg:opacity-75" /> {/* Gradient overlay */}
        <div className="container mx-auto px-4 relative z-10 py-24">
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-12"
            style={{ y, opacity }}
          >
            Бонусная система
          </motion.h2>
          <motion.p
            className="text-xl text-center text-white mb-16 max-w-3xl mx-auto"
            style={{ y, opacity }}
          >
            Бонусная система — важный аспект, который помогает пользователям развивать свои профессиональные навыки и
            получать дополнительные преимущества. Наша цель — сделать участие в конкурсах не только увлекательным, но и
            полезным для твоего карьерного роста.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bonusItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverEnd={() => {
                  scale.set(1);
                }}
              >
                <Card
                  className="h-full bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-bold text-white">
                      <item.icon className="w-8 h-8 mr-2 text-purple-300" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-white mb-4">{item.content}</p>
                    <p className="text-sm text-gray-200">{item.description}</p>
                    {index === 1 && (
                      <Button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                        Получить больше &quot;старсов&quot;
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          {combinedIcons.map((icon, index) => (
            <FloatingIcon key={index} Icon={icon.icon} delay={icon.delay} />
          ))}
        </div>
      </section>
    </Parallax>
  );
};

export default AnimationsBlocksSection;