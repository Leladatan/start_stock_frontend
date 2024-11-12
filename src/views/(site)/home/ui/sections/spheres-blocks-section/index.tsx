'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import SphereCard from "@/views/(site)/home/ui/sections/spheres-blocks-section/sphere-card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/components/ui/carousel"
import { spheres } from "@/views/(site)/home/const"

export default function SpheresBlocksSection() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    return (
        <section className="py-12 bg-backgrounds-light">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-text-indigo">Выберите сферу</h2>
                <Carousel
                    className="w-full max-w-xs sm:max-w-none mx-auto relative"
                    setApi={(api) => {
                        api?.on('select', () => {
                            setCurrentSlide(api.selectedScrollSnap())
                        })
                    }}
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {spheres.map((sphere) => (
                            <CarouselItem key={sphere.name} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                                <motion.div
                                    className={"h-full"}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link href={sphere.href} className="block h-full">
                                        <SphereCard sphere={sphere} />
                                    </Link>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {!isMobile && (
                        <>
                            <CarouselPrevious />
                            <CarouselNext />
                        </>
                    )}
                    {isMobile && (
                        <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
                            {spheres.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        index === currentSlide ? 'bg-backgrounds-blue' : 'bg-backgrounds-gray'
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </Carousel>
            </div>
        </section>
    )
}