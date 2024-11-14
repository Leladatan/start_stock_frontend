"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cn } from "@/shared/lib/utils"
import { motion } from "framer-motion"

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Root
            className={cn("grid gap-2", className)}
            {...props}
            ref={ref}
        />
    )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
                "group relative aspect-square h-5 w-5 rounded-full border-2 border-text-gray text-text-orange shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-text-blue disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-in-out",
                "hover:border-text-orange",
                className
            )}
            {...props}
        >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-2 w-2 rounded-full bg-text-orange"
                />
            </RadioGroupPrimitive.Indicator>
            <motion.div
                className="absolute -inset-2 rounded-full bg-backgrounds-orange opacity-0 transition-opacity duration-200"
                whileHover={{ opacity: 0.1 }}
                whileTap={{ opacity: 0.2 }}
            />
        </RadioGroupPrimitive.Item>
    )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }