"use client";

import {useEffect, useRef} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/shared/components/ui/card";
import {motion, useAnimation, useInView} from "framer-motion";
import {features} from "../../../const";

const AboutSection = () => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, {once: true});

    const cardColors = [
        "bg-backgrounds-orange",
        "bg-backgrounds-blue",
        "bg-backgrounds-indigo",
        "bg-backgrounds-gray",
    ];

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
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-text-indigo">
                        Возможности креативной индустрии в одном месте
                    </h2>
                    <p className="max-w-[900px] text-text-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Здесь вы найдете конкурсы, фестивали, крутые мероприятия, соберете команду мечты, сможете
                        привлечь эксперта
                        для оценки вашего проекта и заработать бонусы, которые пригодятся в развитии вашей карьеры.
                    </p>
                </motion.div>
                <div ref={ref} className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
                    <div className="lg:col-span-2">
                        <div className="grid gap-4 md:grid-cols-2">
                            {features.map((feature, index) => (
                                <Card key={index}
                                      className={`h-full ${cardColors[index % cardColors.length]} transition-all duration-300 border-none`}>
                                    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                                        <feature.icon className="h-6 w-6 text-text-light mr-2"/>
                                        <CardTitle className="text-lg font-bold text-text-light">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-text-light">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;