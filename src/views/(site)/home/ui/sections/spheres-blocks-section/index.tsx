"use client";

import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ChevronRight} from "lucide-react";
import {Button} from "@/shared/components/ui/button";
import Link from "next/link";
import {spheres} from "../../../const";
import SphereCard from "@/views/(site)/home/ui/sections/spheres-blocks-section/sphere-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/components/ui/carousel";

// TODO: Переписать на карусель даже десктоп часть

const SpheresBlocksSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showAll, setShowAll] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const visibleSpheres = showAll ? spheres : spheres.slice(0, 5);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const renderContent = () => {
        if (isMobile) {
            return (
                <Carousel
                    className="w-full max-w-xs mx-auto relative"
                    setApi={(api) => {
                        api?.on('select', () => {
                            setCurrentSlide(api.selectedScrollSnap())
                        })
                    }}
                >
                    <CarouselContent>
                        {spheres.map((sphere) => (
                            <CarouselItem key={sphere.name}>
                                <Link href={sphere.href} className="block h-full">
                                    <SphereCard sphere={sphere}/>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {window.innerWidth >= 640 && (
                        <>
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </>
                    )}
                    {/* TODO: Добавить motion */}
                    <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
                        {spheres.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentSlide ? 'bg-backgrounds-blue' : 'bg-backgrounds-gray'
                                }`}
                                onClick={() => {
                                    const api = (document.querySelector('.carousel') as any)?.Carousel
                                    api?.scrollTo(index)
                                }}
                            />
                        ))}
                    </div>
                </Carousel>
            );
        }

        return (
            <>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                    layout
                >
                    <AnimatePresence>
                        {visibleSpheres.map((sphere) => (
                            <motion.div
                                key={sphere.name}
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.8}}
                                transition={{duration: 0.3}}
                            >
                                <Link href={sphere.href} className="block h-full">
                                    <SphereCard sphere={sphere}/>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                {!showAll && (
                    <div className="mt-8 text-center">
                        <Button
                            onClick={() => setShowAll(true)}
                            className="bg-backgrounds-orange hover:bg-backgrounds-red text-text-light"
                        >
                            Показать все <ChevronRight className="ml-2 h-4 w-4"/>
                        </Button>
                    </div>
                )}
            </>
        );
    };

    return (
        <section className="py-12 bg-backgrounds-light">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-text-indigo">Выберите сферу</h2>
                {renderContent()}
            </div>
        </section>
    );
};

export default SpheresBlocksSection;