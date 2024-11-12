'use client'

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cn } from "@/shared/lib/utils"
import { CheckIcon } from "@radix-ui/react-icons"
import { motion, AnimatePresence } from "framer-motion"

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
      <CheckboxPrimitive.Root
          ref={ref}
          className={cn(
              "peer h-5 w-5 shrink-0 rounded-sm border-2 border-text-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-orange focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-text-orange data-[state=checked]:bg-text-orange data-[state=checked]:text-text-light transition-all duration-200 ease-in-out",
              isHovered && "shadow-md",
              className
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}
      >
        <AnimatePresence>
          {props.checked && (
              <CheckboxPrimitive.Indicator
                  className={cn("flex items-center justify-center text-current")}
                  forceMount
              >
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <CheckIcon className="h-4 w-4" />
                </motion.div>
              </CheckboxPrimitive.Indicator>
          )}
        </AnimatePresence>
      </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }