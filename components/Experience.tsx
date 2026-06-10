"use client"

import { motion } from "framer-motion"

const experience = [
  {
    company: "TIQ Fitness",
    location: "Dallas, TX",
    role: "Founder & Developer",
    period: "Jan 2026 – Present",
    bullets: [
      "Founded and shipped an AI-powered iOS fitness app to the App Store; integrated GPT-4o-mini via Cloudflare Workers to generate personalized workout plans and auto-populate nutrition macros in real time.",
      "Architected the full product stack: SwiftUI frontend, SwiftData persistence, RevenueCat subscription management — from zero to live with paying users.",
    ],
  },
  {
    company: "Toro Property Solutions",
    location: "Dallas, TX",
    role: "Web & Data Developer",
    period: "Jul 2025 – Dec 2025",
    bullets: [
      "Designed and deployed a full-stack web application for a property services startup, integrating a Supabase backend to structure and manage customer leads, service appointments, and operational records.",
      "Built automated email notification workflows to streamline team communication and reduce manual follow-up across daily operations.",
    ],
  },
  {
    company: "Life Time Fitness",
    location: "Garland, TX",
    role: "Facility Operations Team Member",
    period: "Jan 2026 – Present",
    bullets: [
      "Maintain operational standards across a high-traffic fitness facility serving hundreds of daily members, demonstrating reliability and professionalism in a customer-facing environment.",
    ],
  },
]

const skills = [
  {
    category: "Machine Learning & Modeling",
    items: ["Python", "Pandas", "Polars", "NumPy", "Scikit-learn", "R", "Time Series", "Reinforcement Learning", "Feature Engineering", "API's"],
  },
  {
    category: "Data Engineering/ Analysis",
    items: ["ETL Pipelines", "Parquet", "SQL", "AWS", "Supabase", "MongoDB", "Neo4j", "Git"],
  },
  {
    category: "Visualization & Deployment",
    items: ["Streamlit", "Power BI", "Tableau", "Cloudflare Workers", "SwiftUI"],
  },
  {
    category: "Others"
    , items: ["Java" ,"Microsoft Office","React", "SwiftUI/SwiftData", "Claude", "ChatGPT"],
  }
]

const languages = [
  { lang: "English", flag: "🇺🇸", level: "Fluent" },
  { lang: "Spanish", flag: "🇲🇽", level: "Fluent / Native" },
  { lang: "Japanese", flag: "🇯🇵", level: "Beginner" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1 },
  }),
}

export default function Experience() {
  return (
    <div className="relative min-h-screen">
      <div className="bg-experience absolute inset-0 -z-10" />
    <div className="min-h-screen px-6 py-24 max-w-5xl mx-auto">
      {/* Experience */}
      <motion.h2
        className="text-3xl font-serif mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-6 mb-20">
        {experience.map((job, i) => (
          <motion.div
            key={job.company + job.role}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="text-xl font-serif">{job.role}</h3>
                <p className="text-white/80 text-sm">{job.company} &mdash; {job.location}</p>
              </div>
              <span className="text-white/40 text-sm shrink-0">{job.period}</span>
            </div>
            <ul className="flex flex-col gap-2 mt-1">
              {job.bullets.map((b, j) => (
                <li key={j} className="text-sm text-white/70 leading-relaxed flex gap-2">
                  <span className="text-green-500 mt-1 shrink-0">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Skills */}
      <motion.h2
        className="text-3xl font-serif mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        My Skills
      </motion.h2>

      <div className="flex flex-col gap-8 mb-20">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            custom={i + 3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <h3 className="text-md text-white/80 uppercase tracking-widest mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-full border border-white/20 text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Languages */}
      <motion.h2
        className="text-3xl font-serif mb-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        Languages
      </motion.h2>

      <motion.div
        className="flex flex-wrap gap-4"
        custom={6}
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        {languages.map(({ lang, flag, level }) => (
          <div
            key={lang}
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 flex flex-col gap-0.5"
          >
            <span className="text-base font-serif flex items-center gap-2">
              <span>{flag}</span>{lang}
            </span>
            <span className="text-sm text-white/50">{level}</span>
          </div>
        ))}
      </motion.div>
    </div>
    </div>
  )
}
