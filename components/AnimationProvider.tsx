"use client"

import { useCallback, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Particles, { ParticlesProvider } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Engine } from "@tsparticles/engine"

const particleOptions = {
  background: { color: { value: "transparent" } },
  particles: {
    number: { value: 80 },
    color: { value: "#d92121" },
    links: { enable: true, color: "#d92121", opacity: 0.8 },
    move: { enable: true, speed: 1 },
    opacity: { value: 0.4 },
    size: { value: { min: 1, max: 3 } },
  },
}

function HomeParticles() {
  const [id] = useState(() => `tsparticles-${Date.now()}`)
  return (
    <Particles
      id={id}
      className="fixed inset-0 -z-10"
      options={particleOptions}
    />
  )
}

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <ParticlesProvider init={init}>
      {pathname === "/" && <HomeParticles />}
      <AnimatePresence mode="wait">
        <div key={pathname}>{children}</div>
      </AnimatePresence>
    </ParticlesProvider>
  )
}
