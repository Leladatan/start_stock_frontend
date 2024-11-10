"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { motion, useAnimation, useInView } from "framer-motion";
import { features } from "@/views/home/const";

const AboutSection = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-backgrounds-light">
      <div className="container px-4 mx-auto md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-text-indigo">
            Возможности креативной индустрии в одном месте
          </h2>
          <p className="max-w-[900px] text-text-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Здесь вы найдете конкурсы, фестивали, крутые мероприятия, соберете команду мечты, сможете привлечь эксперта
            для оценки вашего проекта и заработать бонусы, которые пригодятся в развитии вашей карьеры.
          </p>
        </motion.div>
        <div ref={ref} className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <div className="grid gap-4 md:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="h-full bg-backgrounds-light hover:shadow-lg transition-shadow duration-300 border border-backgrounds-gray">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                      <feature.icon className="h-6 w-6 text-text-orange mr-2"/>
                      <CardTitle className="text-lg font-bold text-text-blue">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-text-gray">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;