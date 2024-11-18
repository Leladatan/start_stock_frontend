'use client'

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView, IntersectionOptions } from "react-intersection-observer";
import { SphereType } from "@/views/(site)/home/types"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card";

interface SphereCardProps {
    sphere: SphereType
    index: number
}

const SphereCard: React.FC<SphereCardProps> = ({ sphere, index }) => {
    const controls = useAnimation()
    const options: IntersectionOptions = {
        threshold: 0.2,
        triggerOnce: true,
    }
    const [ref, inView] = useInView(options)

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            className={"h-full"}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
            }}
        >
            <Card className="text-text-light shadow-md border cursor-pointer transition-all h-40 duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-semibold text-text-orange">{sphere.name}</CardTitle>
                    <motion.div
                        whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                    >
                        <sphere.icon className="text-text-blue h-6 w-6" />
                    </motion.div>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-text-gray/80 mb-2">
                        {sphere.description}
                    </CardDescription>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default SphereCard