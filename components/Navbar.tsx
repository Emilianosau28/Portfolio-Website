"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"

const links = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience & Skills", href: "/experience" },
]

export default function Navbar() {
  const pathname = usePathname()
  const active = links.find((l) => l.href === pathname)?.label ?? "Home"
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-2 border border-white/20">
      {links.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          onMouseEnter={() => setHovered(label)}
          onMouseLeave={() => setHovered(null)}
          className="relative px-4 py-1.5 text-sm text-white-300 z-10"
        >
          {hovered === label && active !== label && (
            <motion.span
              layoutId="hoverPill"
              className="absolute inset-0 bg-white/10 rounded-full -z-10"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          {active === label && (
            <motion.span
              layoutId="activePill"
              className="absolute inset-0 bg-white/30 rounded-full -z-10"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          {label}
        </Link>
      ))}
      <Link
        href="/contact"
        className="ml-2 px-4 py-1.5 text-sm border border-white/50 rounded-full text-white-300 hover:bg-white/10 transition-colors"
      >
        Contact
      </Link>
      <a
        href="/ResumeESG.pdf"
        target="_blank"
        className="ml-2 px-4 py-1.5 text-sm border border-white/50 rounded-full text-white-300 hover:bg-white/10 transition-colors"
      >
        View Resume
      </a>
    </nav>
  )
}