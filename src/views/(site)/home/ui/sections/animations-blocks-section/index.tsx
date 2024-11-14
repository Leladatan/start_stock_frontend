"use client";

import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/shared/components/ui/button";
import { bonusItems } from "../../../const";
import FloatingIcon from "@/views/(site)/home/ui/sections/main-section/floating-icon";

const AnimationsBlocksSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollY, [0, 1], [100, -100]);

  const floatingIcons = bonusItems.map((item) => ({
    icon: item.icon,
    delay: Math.random() * 2,
  }));

  const combinedIcons = [...floatingIcons, ...floatingIcons, ...floatingIcons];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center bg-text-blue pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-backgrounds-light via-transparent to-backgrounds-indigo opacity-50" />
      <div className="container mx-auto px-4 relative z-10 py-14">
        <motion.h2
          className="text-4xl font-bold text-center text-text-indigo mb-12"
          style={{ y }}
        >
          Бонусная система
        </motion.h2>
        <motion.p
          className="text-xl text-center text-text-light/90 max-w-3xl mx-auto"
          style={{ y }}
        >
          Бонусная система — важный аспект, который помогает пользователям развивать свои профессиональные навыки и
          получать дополнительные преимущества. Наша цель — сделать участие в конкурсах не только увлекательным, но и
          полезным для твоего карьерного роста.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {bonusItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                className="h-full bg-backgrounds-light/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-text-blue">
                    <item.icon className="w-8 h-8 mr-2 text-text-orange" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-text-indigo mb-4">{item.content}</p>
                  <p className="text-sm text-text-gray">{item.description}</p>
                  {index === 1 && (
                    <Button className="mt-4 bg-backgrounds-orange hover:bg-backgrounds-red text-text-light">
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
  );
};

export default AnimationsBlocksSection;