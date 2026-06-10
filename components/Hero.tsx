"use client"

import { motion } from "framer-motion"

const title = "Aspiring Data Scientist & Software Engineer"

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.h1
        className="text-3xl md:text-5xl font-serif mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Emiliano Saucedo Goldschmied
      </motion.h1>
      <p className="text-base md:text-xl text-white-500">
        {title.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </p>
    </section>
  )
}
