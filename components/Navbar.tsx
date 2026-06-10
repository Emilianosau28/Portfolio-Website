"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi"

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
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop — unchanged */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 gap-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-2 border border-white/20">
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

      {/* Mobile — hamburger button */}
      <div className="md:hidden fixed top-5 right-5 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
        >
          {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile — full screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-6"
          >
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-serif transition-colors ${
                  active === label ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-serif text-white/50 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <a
              href="/ResumeESG.pdf"
              target="_blank"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-6 py-2 text-sm border border-white/50 rounded-full text-white/70 hover:bg-white/10 transition-colors"
            >
              View Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
