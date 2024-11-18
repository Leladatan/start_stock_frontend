'use client'

import {useState, useEffect, useRef} from "react"
import {AnimatePresence, motion } from "framer-motion"
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
    const [isHovering, setIsHovering] = useState(false)
    const carouselRef = useRef(null)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    return (
        <motion.section
            className="py-12 bg-backgrounds-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold mb-8 text-center text-text-indigo"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Выберите сферу
                </motion.h2>
                <Carousel
                    ref={carouselRef}
                    className="w-full max-w-xs sm:max-w-none mx-auto relative"
                    setApi={(api) => {
                        api?.on('select', () => {
                            setCurrentSlide(api.selectedScrollSnap())
                        })
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <CarouselContent className="mt-10 h-52 -ml-2 md:-ml-4">
                        <AnimatePresence>
                            {spheres.map((sphere, index) => (
                                <CarouselItem key={sphere.name} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                                    <Link href={sphere.href} className="block h-full">
                                        <SphereCard sphere={sphere} index={index} />
                                    </Link>
                                </CarouselItem>
                            ))}
                        </AnimatePresence>
                    </CarouselContent>
                    {!isMobile && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovering ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <CarouselPrevious className="left-0 -translate-x-1/2" />
                            <CarouselNext className="right-0 translate-x-1/2" />
                        </motion.div>
                    )}
                    {isMobile && (
                        <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
                            {spheres.map((_, index) => (
                                <motion.button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        index === currentSlide ? 'bg-backgrounds-blue' : 'bg-backgrounds-gray'
                                    }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>
                    )}
                </Carousel>
            </div>
        </motion.section>
    )
}