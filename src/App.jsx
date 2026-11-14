import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";



export default function NidaPortfolio() {
  // safe theme initializer: saved -> system -> light
  const getInitialTheme = () => {
    try {
      const saved = localStorage.getItem("nida_theme");
      if (saved === "dark" || saved === "light") return saved;
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
      return "light";
    } catch {
      return "light";
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // inject Poppins font link to head (so component remains single-file friendly)
  useEffect(() => {
    const id = "nida-google-font";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  // apply theme class to html element and persist
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("nida_theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  // fallback image if remote image fails
  const fallbackImg = "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=60";

  // Updated skills requested by user
  const skills = [
    "Frontend Developer",
    "React.js",
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "UI/UX Design",
    "Game Developer (Unity / C#)",
  ];

  // New project list (relevant and real-feel)
  const projects = [
    {
      title: "Deadly Land — Zombie Survival (FYP)",
      desc: "Desktop Unity game prototype focusing on mission flow, AI-driven zombies and engaging gameplay loops.",
      tags: ["Unity", "C#", "Game Design"],
      image: "https://images.unsplash.com/photo-1542204165-4a6b48b86c72?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "GlowAura — Beauty & Skincare (React)",
      desc: "Responsive brand site for skincare products with product pages and a lightweight cart UI.",
      tags: ["React", "Tailwind", "Responsive"],
      image: "https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "FurniCraft — Furniture E-store (React)",
      desc: "Clean product listing, filtering, and product detail experiences for a modern furniture store.",
      tags: ["React", "UX", "E-commerce"],
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Vision Portfolio — Template",
      desc: "A polished portfolio template with gradient theming, Framer Motion animations and responsive layout.",
      tags: ["React", "Framer Motion", "Design"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Foodify — Food Delivery UI",
      desc: "Fast menu browsing and checkout micro-interactions designed for delightful ordering UX.",
      tags: ["React", "State Management", "Micro-interactions"],
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const experience = [
    {
      role: "Frontend Developer (Freelance)",
      duration: "2023 — Present",
      desc: "Design & build responsive front-end experiences using React and modern CSS approaches.",
    },
    {
      role: "Game Developer — Personal Projects",
      duration: "2021 — 2024",
      desc: "Prototype Unity games, design enemy AI and mission progression systems.",
    },
  ];

  const testimonials = [
    { from: "Supervisor", quote: "Highly creative and produces polished results. Strong attention to detail." },
    { from: "Maryam", quote: "Great teammate, quick learner and excellent UI instincts." },
  ];

  // small Image component with fallback
  const Img = ({ src, alt, className = "" }) => (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallbackImg;
      }}
      className={className}
    />
  );

  // motion variants
  const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

  return (
    <div
      className="min-h-screen font-poppins bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100
                 dark:from-[#0b0820] dark:via-[#2b1438] dark:to-[#1a0b2b] text-gray-900 dark:text-gray-100 transition-colors duration-500"
      style={{ fontFamily: "'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}
    >
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-black/40 border-b border-pink-200 dark:border-pink-900">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white font-extrabold shadow">
              NA
            </div>
            <div>
              <div className="text-lg font-semibold">Nida Ayesha</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Frontend Developer • Game Developer</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#about" className="hover:text-pink-600 dark:hover:text-pink-300 transition">About</a>
              <a href="#skills" className="hover:text-pink-600 dark:hover:text-pink-300 transition">Skills</a>
              <a href="#projects" className="hover:text-pink-600 dark:hover:text-pink-300 transition">Projects</a>
              <a href="#experience" className="hover:text-pink-600 dark:hover:text-pink-300 transition">Experience</a>
              <a href="#contact" className="hover:text-pink-600 dark:hover:text-pink-300 transition">Contact</a>
            </nav>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md hover:scale-105 transition-transform"
              title="Toggle light / dark"
            >
              {theme === "dark" ? (
                // sun icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 4.5a1 1 0 011-1V2a1 1 0 10-2 0v1.5a1 1 0 011 1zM4.5 10a1 1 0 01-1-1H2a1 1 0 100 2h1.5a1 1 0 011-1zM16 9a1 1 0 011 1h1.5a1 1 0 100-2H17a1 1 0 01-1 1zM10 17.5a1 1 0 011 1V20a1 1 0 10-2 0v-1.5a1 1 0 011-1zM5.636 5.636a1 1 0 011.414 0L8 6.586a1 1 0 11-1.414 1.414L5.636 7.05a1 1 0 010-1.414zM14.364 14.364a1 1 0 011.414 0l1.05 1.05a1 1 0 11-1.414 1.414l-1.05-1.05a1 1 0 010-1.414zM14.364 5.636a1 1 0 010 1.414l-1.05 1.05A1 1 0 1111.9 6.686l1.05-1.05a1 1 0 011.414 0zM5.636 14.364a1 1 0 010 1.414l-1.05 1.05A1 1 0 113.172 15.4l1.05-1.05a1 1 0 011.414 0z" />
                </svg>
              ) : (
                // moon icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section id="hero" className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi — I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-500 to-rose-500">
                Nida Ayesha
              </span>
            </h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-xl">
              Computer Science graduate & <strong>Frontend Developer</strong> who also prototypes games in Unity.
              I design clean, accessible interfaces with delightful micro-interactions.
            </p>

            <div className="mt-6 flex gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                href="#projects"
                className="inline-flex items-center px-5 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg"
              >
                View Projects
              </motion.a>
              <motion.a whileHover={{ scale: 1.03 }} href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg border border-pink-300 dark:border-pink-700">
                Contact Me
              </motion.a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div>
                <div className="text-xs uppercase">Experience</div>
                <div className="font-semibold">3+ years</div>
              </div>
              <div>
                <div className="text-xs uppercase">Domains</div>
                <div className="font-semibold">Web & Game Dev</div>
              </div>
              <div>
                <div className="text-xs uppercase">Location</div>
                <div className="font-semibold">Punjab, Pakistan</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="flex justify-center">
            <Img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80"
              alt="Nida portrait"
              className="w-72 h-72 rounded-full object-cover shadow-2xl border-4 border-pink-300 dark:border-pink-700"
            />
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-12">
          <h2 className="text-2xl font-bold text-pink-600">About</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-3xl">
            I create modern, accessible web interfaces and prototype game mechanics with an eye for aesthetic detail.
            My focus is on responsiveness, usability, and polished interactions.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-10">
          <h2 className="text-2xl font-bold text-purple-600">Skills</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              {skills.map((skill) => (
                <motion.div key={skill} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-3">
                  <div className="inline-flex items-center gap-3">
                    <span className="inline-block w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                    <div className="font-medium">{skill}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white/60 dark:bg-black/40 border border-pink-200 dark:border-pink-800 shadow">
              <h3 className="font-semibold text-pink-600">Tools & Technologies</h3>
              <ul className="mt-3 text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>• React, Hooks & Router</li>
                <li>• Tailwind CSS & responsive design</li>
                <li>• Framer Motion for smooth interactions</li>
                <li>• Unity & C# for game prototypes</li>
                <li>• Git & VS Code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-12">
          <h2 className="text-2xl font-bold text-rose-600">Selected Projects</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">A selection of real-feel projects showing UI, interactions and prototypes.</p>

          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-pink-100 dark:border-pink-800 bg-white/90 dark:bg-black/40"
              >
                <Img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-pink-600">{p.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-12">
          <h2 className="text-2xl font-bold text-pink-600">Experience</h2>
          <div className="mt-6 space-y-4">
            {experience.map((exp) => (
              <div key={exp.role} className="p-4 rounded-xl border bg-white/70 dark:bg-black/40 border-pink-200 dark:border-pink-800">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-purple-600">{exp.role}</h3>
                  <div className="text-sm text-gray-500">{exp.duration}</div>
                </div>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="mt-12">
          <h2 className="text-2xl font-bold text-rose-600">Testimonials</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {testimonials.map((t) => (
              <blockquote key={t.from} className="p-4 rounded-lg border bg-white/70 dark:bg-black/40 border-rose-100 dark:border-rose-800">
                <p className="text-sm text-gray-800 dark:text-gray-200">"{t.quote}"</p>
                <div className="mt-2 text-xs text-gray-500">— {t.from}</div>
              </blockquote>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12 mb-16">
          <h2 className="text-2xl font-bold text-rose-600">Contact</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form className="p-6 rounded-2xl bg-white/80 dark:bg-black/40 border border-pink-200 dark:border-pink-800 shadow max-w-lg">
              <input className="w-full px-3 py-2 border rounded-lg mb-3" placeholder="Your Name" />
              <input className="w-full px-3 py-2 border rounded-lg mb-3" placeholder="Your Email" />
              <textarea className="w-full px-3 py-2 border rounded-lg mb-3" rows={4} placeholder="Message" />
              <button type="button" className="w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold">
                Send Message
              </button>
            </form>

            <div className="p-6 rounded-2xl bg-white/80 dark:bg-black/40 border border-pink-200 dark:border-pink-800 shadow">
              <p><strong>Email:</strong> nida@example.com</p>
              <p className="mt-1"><strong>Phone:</strong> +92 300 0000000</p>
              <p className="mt-1"><strong>Location:</strong> Punjab, Pakistan</p>

              <div className="mt-4">
                <div className="text-sm text-gray-500">Socials</div>
                <div className="mt-2 flex gap-3">
                  <a className="px-3 py-1.5 rounded-md border bg-pink-50 dark:bg-transparent text-pink-600">LinkedIn</a>
                  <a className="px-3 py-1.5 rounded-md border bg-pink-50 dark:bg-transparent text-pink-600">GitHub</a>
                  <a className="px-3 py-1.5 rounded-md border bg-pink-50 dark:bg-transparent text-pink-600">Behance</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-6 text-center border-t border-pink-100 dark:border-pink-900">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-700 dark:text-gray-300">© {new Date().getFullYear()} <span className="font-semibold text-pink-600">Nida Ayesha</span> — All Rights Reserved </div>
      </footer>
    </div>
  );
}
