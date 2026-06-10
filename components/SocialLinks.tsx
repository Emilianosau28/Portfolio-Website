import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export default function SocialLinks() {
  return (
    <div className="fixed bottom-6 right-10 flex flex-col gap-4 z-50">
      <a
        href="https://www.linkedin.com/in/emiliano-saucedo-goldschmied/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors"
      >
        <FaLinkedin size={37} />
      </a>
      <a
        href="https://github.com/Emilianosau28"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors"
      >
        <FaGithub size={37} />
      </a>
      <a
        href="mailto:emilianosaucedo28.c@gmail.com"
        className="text-white/70 hover:text-white transition-colors"
      >
        <FaEnvelope size={37} />
      </a>
    </div>
  )
}
