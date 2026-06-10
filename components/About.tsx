import Image from "next/image"

export default function About() {
  return (
    <div className="relative min-h-screen">
      <div className="bg-about absolute inset-0 -z-10" />
      <section id="about-me" className="min-h-screen flex flex-col justify-center px-6 py-20 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <Image
          src="/Z08_0538.JPG"
          alt="Emiliano Saucedo Goldschmied"
          width={280}
          height={320}
          className="rounded-2xl object-cover shrink-0 w-48 md:w-[280px]"
        />
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-serif">About Me</h2>
          <p className="text-white-400 text-md leading-relaxed">
          I am an aspiring Data Scientist, Data Analyst, and Software Engineer passionate about building data-driven products that combine analytics, machine learning, and software development. Through projects involving forecasting, predictive modeling, automation, AI applications, and full-stack web development, I have developed a strong foundation in transforming data into practical solutions. I enjoy tackling complex problems, creating intuitive user experiences, and building tools that generate real business value. As a bilingual professional fluent in English and Spanish, I thrive in collaborative environments and enjoy working with diverse teams. My goal is to continue developing innovative technologies that help organizations make smarter, data-driven decisions. I am actively seeking opportunities where I can contribute, grow my technical expertise, and help transform data into impactful business solutions.
          </p>
          <div>
            <h3 className="text-xl font-serif mb-2 text-white">Education</h3>
            <p className="text-white-400 text-md">B.S. in Data Science</p>
            <p className="text-white-500 text-md">Iowa State University &mdash; Aug 2021 – Dec 2025</p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-2 text-white">Certifications</h3>
            <p className="text-white-400 text-md">AWS Certified Cloud Practicioner &mdash; Mar 2026 –  Mar 2029</p>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}