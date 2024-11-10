"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import FloatingIcon from "@/views/home/ui/sections/main-section/floating-icon";
import { spheres } from "@/views/home/const";

const MainSection = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLElement | null>(null);

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const [phraseIndex, setPhraseIndex] = useState<number>(0);

  const phrases = ["Креативно", "Инновационно", "Профессионально"];

  useEffect(() => {
    setIsMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const floatingIcons = spheres.map((sphere) => ({
    icon: sphere.icon,
    delay: 0.2,
  }));

  const visibleIcons = isMobile ? floatingIcons.slice(0, 5) : floatingIcons;

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-backgrounds-blue to-backgrounds-indigo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ y: backgroundY }}
      >
        {visibleIcons.map((icon, index) => (
          <FloatingIcon key={`icon1-${index}`} Icon={icon.icon} delay={icon.delay} />
        ))}
        {visibleIcons.map((icon, index) => (
          <FloatingIcon key={`icon2-${index}`} Icon={icon.icon} delay={icon.delay} />
        ))}
      </motion.div>
      <AnimatePresence>
        {isMounted && (
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-center space-y-6"
              style={{ opacity, scale }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold text-text-light"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Start Stock
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl font-medium text-text-light/80 max-w-md mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Стартуй{" "}
                <motion.span
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {phrases[phraseIndex]}
                </motion.span>
              </motion.p>
              <motion.div
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-backgrounds-light/20 blur-xl"/>
                <div className="relative bg-backgrounds-light/10 backdrop-blur-sm rounded-lg p-8 shadow-xl">
                  <p className="text-lg md:text-xl text-text-light leading-relaxed">
                    Раскройте свой потенциал.
                    Начните свой путь с инновационных инструментов и экспертной информации.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-backgrounds-light to-transparent"/>
    </section>
  );
};

export default MainSection;