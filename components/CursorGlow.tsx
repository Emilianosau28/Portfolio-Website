"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CursorGlow() {
  const rawX = useMotionValue(-200)
  const rawY = useMotionValue(-200)

  const x = useSpring(rawX, { stiffness: 120, damping: 20 })
  const y = useSpring(rawY, { stiffness: 120, damping: 20 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX - 200)
      rawY.set(e.clientY - 200)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [rawX, rawY])

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-0 w-[400px] h-[400px] rounded-full"
      style={{
        x,
        y,
        background: "radial-gradient(circle, rgba(217,33,33,0.12) 0%, transparent 70%)",
      }}
    />
  )
}
