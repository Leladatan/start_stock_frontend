"use client";

import {useEffect, useRef} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/shared/components/ui/card";
import {motion, useAnimation, useInView} from "framer-motion";
import {features} from "../../../const";

const AboutSection = () => {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const cardColors = [
        "bg-backgrounds-orange",
        "bg-backgrounds-blue",
        "bg-backgrounds-indigo",
        "bg-backgrounds-gray",
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    return (
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-backgrounds-light">
          <motion.div
            className="absolute left-10 inset-0 pointer-events-none"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
          >
              <motion.img
                src="/icons/fifth.png"
                alt=""
                className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 translate-x-1/4 opacity-10 object-contain"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
              />
          </motion.div>
          <div className="container px-4 mx-auto md:px-6">
              <motion.div
                className="flex flex-col items-center space-y-4 text-center"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.7}}
              >
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-text-indigo">
                      Возможности креативной индустрии в одном месте
                  </h2>
                  <p
                    className="max-w-[900px] text-text-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Здесь вы найдете конкурсы, фестивали, крутые мероприятия, соберете команду мечты, сможете
                      привлечь эксперта для оценки вашего проекта и заработать бонусы, которые пригодятся в развитии
                      вашей карьеры.
                  </p>
              </motion.div>
              <motion.div
                ref={ref}
                className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
              >
                  <div className="lg:col-span-2">
                      <div className="grid gap-4 md:grid-cols-2">
                          {features.map((feature, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card
                                  className={`h-full ${
                                    cardColors[index % cardColors.length]
                                  } transition-all duration-300 border-none`}
                                >
                                    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                                        <feature.icon className="h-6 w-6 text-text-light mr-2"/>
                                        <CardTitle className="text-lg font-bold text-text-light">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-text-light">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                          ))}
                      </div>
                  </div>
              </motion.div>
          </div>
      </section>
    )
}

export default AboutSection;