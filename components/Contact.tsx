"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"

const contacts = [
  {
    icon: <FaEnvelope size={22} />,
    label: "Email",
    value: "emilianosaucedo28.c@gmail.com",
    href: "mailto:emilianosaucedo28.c@gmail.com",
  },
  {
    icon: <FaPhone size={22} />,
    label: "Phone",
    value: "469-560-0828",
    href: "tel:4695600828",
  },
  {
    icon: <FaLinkedin size={22} />,
    label: "LinkedIn",
    value: "linkedin.com/in/emiliano-saucedo-goldschmied",
    href: "https://www.linkedin.com/in/emiliano-saucedo-goldschmied/",
  },
  {
    icon: <FaGithub size={22} />,
    label: "GitHub",
    value: "github.com/Emilianosau28",
    href: "https://github.com/Emilianosau28",
  },
]

export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <div className="bg-experience absolute inset-0 -z-10" />
      <motion.h2
        className="text-3xl font-serif mb-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-white/100 text-sm mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Feel free to reach out through any of the options below.
      </motion.p>

      <div className="flex flex-col gap-4 w-full max-w-md">
        {contacts.map(({ icon, label, value, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:bg-white/10 hover:border-white/20 transition-colors group"
          >
            <span className="text-white/50 group-hover:text-white transition-colors shrink-0">
              {icon}
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-xs text-white/40 uppercase tracking-widest">{label}</span>
              <span className="text-sm text-white/80 truncate">{value}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
