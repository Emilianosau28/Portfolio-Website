"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type Project = {
  title: string
  description: string
  tags: string[]
  image: string | null
  imageFit?: "object-cover" | "object-contain"
  github?: string
  demo?: string
  demoLabel?: string
}

const projects: Project[] = [
  {
    title: "TIQ Fitness — TrainIQ",
    description:
      "AI-powered fitness app live on the App Store. Generates personalized weekly workout plans, tracks nutrition with macro monitoring, includes a built-in HIIT interval timer, and visualizes progress analytics. Your fitness companion put together, all in one.",
    tags: ["iOS", "Swift", "AI", "Health & Fitness"],
    image: "/tiq-fitness.png",
    demo: "https://apps.apple.com/us/app/tiq-fitness/id6764122054",
    demoLabel: "App Store",
  },
  {
    title: "Stock Volatility Surface Modeling",
    description:
      "Iowa State DS 4010 Capstone. Models and visualizes stock volatility surfaces using LightGBM, comparing them to Options IV surfaces to extract market insights. Deployed as an interactive Streamlit dashboard.",
    tags: ["Python", "LightGBM", "Polars", "Streamlit", "Options Pricing"],
    image: "/volatility-surface.png",
    github: "https://github.com/nrhoads02/ds401-project",
    demo: "https://ds401-dern-volatility-dashboard.streamlit.app/",
    demoLabel: "Live Demo",
  },
  {
    title: "Job Market Forecast",
    description:
      "Forecasting wages, employment, and job demand using FRED and BLS economic data. Predictive models with XGBoost and linear regression project unemployment rates and annual wages through 2030.",
    tags: ["Python", "XGBoost", "FRED API", "BLS Data", "Pandas"],
    image: "/job-market-forecast.png",
    github: "https://github.com/Emilianosau28/Job-Market-forecast",
  },
  {
    title: "Checkers AI",
    description:
      "Checkers AI built in Java implementing both Alpha-Beta pruning and Monte Carlo Tree Search to compare adversarial and stochastic search strategies in a fully playable game.",
    tags: ["Java", "Alpha-Beta Pruning", "MCTS", "Game AI"],
    image: "/checkers-ai.png",
    imageFit: "object-contain",
    github: "https://github.com/Emilianosau28/Checkers",
  },
  {
    title: "Competitive Reinforcement Learning",
    description:
      "Adversarial RL environment with a policy-gradient agent built for competitive evaluation. Adapts to non-stationary dynamics and generalizes across unseen environments — achieved 1st place overall.",
    tags: ["Python", "Reinforcement Learning", "Policy Gradient", "Neural Networks"],
    image: null,
    github: "https://github.com/Emilianosau28/competitive-reinforcement-learning",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  return (
    <div className="relative min-h-screen">
      <div className="bg-projects absolute inset-0 -z-10" />
      <section className="min-h-screen flex flex-col justify-center px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif mb-12">Projects</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={card}
              whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(217,33,33,0.25)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >
              {project.image ? (
                <div className="relative w-full h-96">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className={project.imageFit ?? "object-cover"}
                  />
                </div>
              ) : (
                <div className="w-full h-96 bg-white/5 flex items-center justify-center">
                  <span className="text-white/30 text-sm">No preview available</span>
                </div>
              )}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="text-xl font-serif">{project.title}</h3>
                <p className="text-sm leading-relaxed text-white/70 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full border border-white/20 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/60 hover:text-white transition-colors underline underline-offset-2"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/60 hover:text-white transition-colors underline underline-offset-2"
                    >
                      {project.demoLabel ?? "Live Demo"}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
