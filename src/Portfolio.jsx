
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NidaPortfolio() {
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const id = "nida-google-font";

    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap";

      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const navItems = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Research",
    "Projects",
    "Courses",
    "Contact",
  ];

  const technicalSkills = [
    "Computer Science Fundamentals",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "MERN Stack Fundamentals",
    "Node.js",
    "MongoDB",
    "Unity",
    "C#",
    "Technical Documentation",
    "Report Writing",
    "Research Writing",
    "Graphic Designing",
    "UI/UX Design",
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution:
        "Degree awarded by Government College University Faisalabad (GCUF); studied at Superior University",
      period: "2020 – 2024",
      icon: "🎓",
    },
    {
      degree: "Intermediate – ICS",
      institution: "Punjab College for Women",
      period: "2020",
      icon: "📘",
    },
    {
      degree: "Matriculation",
      institution: "Al Noor",
      period: "2018",
      icon: "📚",
    },
  ];

  const courses = [
    {
      title: "MERN Stack Development",
      description:
        "Coursework covering MongoDB, Express.js, React.js, and Node.js.",
      icon: "💻",
    },
    {
      title: "Graphic Designing",
      description:
        "Completed coursework in graphic design concepts and visual communication.",
      icon: "🎨",
    },
    {
      title: "UI/UX Design",
      description:
        "Completed coursework focused on user interface and user experience design.",
      icon: "🖌️",
    },
  ];

  const teachingStrengths = [
    {
      title: "Clear Explanation",
      description:
        "Aiming to explain technical concepts in simple, understandable language.",
      icon: "💡",
    },
    {
      title: "Student-Focused Learning",
      description:
        "Encouraging questions, participation, and learning at a comfortable pace.",
      icon: "👩‍🏫",
    },
    {
      title: "Practical Understanding",
      description:
        "Connecting theoretical concepts with relevant examples and practical exercises.",
      icon: "🧩",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionHeading =
    "text-3xl md:text-4xl font-bold text-center mb-4";
  const sectionDescription =
    "text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12";
  const cardClass =
    "rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-pink-100 dark:border-gray-700 shadow-lg";

  return (
    <div
      className="min-h-screen text-gray-900 dark:text-gray-100 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 transition-colors duration-300"
      style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
    >
      {/* Theme Button */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle dark and light theme"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl flex items-center justify-center text-xl"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </motion.button>

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-md"
            : "bg-white/50 dark:bg-gray-950/40 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 py-3 flex flex-wrap items-center justify-between gap-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
              NA
            </div>

            <div>
              <h1 className="font-bold text-base">Nida Ayesha</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Computer Science Graduate
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex flex-wrap items-center gap-5 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden sm:inline-block px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90"
          >
            Contact Me
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 pt-32 pb-16">
        {/* Home */}
        <section
          id="home"
          className="min-h-[75vh] grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800">
              Computer Science Graduate | Aspiring Educator
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Nida Ayesha
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-800 dark:text-gray-200">
                Aspiring Computer Science Teacher
              </span>
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mb-8">
              I am a Computer Science graduate with an interest in teaching
              and technology. I enjoy learning about programming, web
              development, and digital tools. My goal is to share my
              knowledge, make technical concepts easier to understand, and
              encourage students to explore the world of technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#education"
                className="px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg"
              >
                View My Education
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-7 py-3 rounded-xl font-semibold border-2 border-pink-500 text-pink-700 dark:text-pink-300 dark:border-pink-400"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-rose-500 p-2 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center text-center">
                <div className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  NA
                </div>
                <h3 className="text-2xl font-bold mt-4">
                  Nida Ayesha
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  BS Computer Science
                </p>
                <p className="text-sm text-pink-600 dark:text-pink-400 mt-1">
                  Aspiring Educator
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-28 scroll-mt-28"
        >
          <h2 className={sectionHeading}>
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className={sectionDescription}>
            My academic background, interests, and professional goals.
          </p>

          <div className={`${cardClass} p-7 md:p-10 max-w-5xl mx-auto`}>
            <p className="text-gray-700 dark:text-gray-300 leading-8 mb-5">
              I am a Computer Science graduate with an academic background
              in computing and a genuine interest in education. I want to
              begin my professional career in teaching and use my knowledge
              to help students understand Computer Science and Information
              Technology.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-8 mb-5">
              During my academic journey, I developed an interest in
              programming, web development, game development, and digital
              design. I have also continued expanding my technical
              knowledge through additional courses in MERN Stack
              Development, Graphic Designing, and UI/UX Design.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-8">
              I believe that good teaching requires patience, preparation,
              clear communication, and a willingness to keep learning. I
              look forward to growing as an educator and creating a
              supportive learning environment for students.
            </p>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-28 scroll-mt-28"
        >
          <h2 className={sectionHeading}>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className={sectionDescription}>
            My academic qualifications.
          </p>

          <div className="max-w-4xl mx-auto space-y-5">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className={`${cardClass} p-6 flex gap-5 items-start`}
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {item.degree}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.institution}
                  </p>

                  <p className="text-sm text-pink-600 dark:text-pink-400 font-medium mt-2">
                    {item.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-28 scroll-mt-28"
        >
          <h2 className={sectionHeading}>
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Technical & Professional Skills
            </span>
          </h2>

          <p className={sectionDescription}>
            Technical, academic, and writing skills I have studied and
            explored through my academic background and additional learning.
          </p>

          <div className={`${cardClass} p-7 md:p-10`}>
            <div className="flex flex-wrap justify-center gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 border border-pink-200 dark:border-purple-800 text-sm md:text-base font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-7">
              These are areas of study and learning, not proficiency
              ratings or professional experience claims.
            </p>
          </div>
        </motion.section>

        {/* Teaching Approach */}
        <motion.section
          id="teaching"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-28"
        >
          <h2 className={sectionHeading}>
            <span className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
              My Teaching Approach
            </span>
          </h2>

          <p className={sectionDescription}>
            The principles I hope to bring to my future teaching career.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {teachingStrengths.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className={`${cardClass} p-7 text-center`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research */}
        <motion.section
          id="research"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-28 scroll-mt-28"
        >
          <h2 className={sectionHeading}>
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Research & Academic Achievement
            </span>
          </h2>

          <p className={sectionDescription}>
            An academic research experience from my university journey.
          </p>

          <div className={`${cardClass} p-7 md:p-9 max-w-4xl mx-auto`}>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-3xl">
                🔬
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Internet of Things (IoT)
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-7 mb-4">
                  I presented research related to the Internet of Things
                  (IoT) at the International Multidisciplinary Research
                  Conference (IMDRC) held at my university.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-7">
                  This academic experience gave me an opportunity to
                  present research work and participate in a
                  multidisciplinary academic conference.
                </p>

                <span className="inline-block mt-5 px-4 py-2 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-semibold">
                  Certificate Received
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Academic Project */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-28 scroll-mt-28"
        >
          <h2 className={sectionHeading}>
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Academic Project
            </span>
          </h2>

          <p className={sectionDescription}>
            A university project included in my academic journey.
          </p>

          <div className={`${cardClass} p-7 md:p-9 max-w-4xl mx-auto`}>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-3xl">
                🎮
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Deadly Land – Zombie Survival Game
                </h3>

                <p className="text-sm text-pink-600 dark:text-pink-400 font-medium mb-4">
                  Final Year Project | Unity | C#
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-7 mb-4">
                  Deadly Land is a PC-based offline zombie survival game
                  developed as a university Final Year Project. The game
                  includes survival gameplay, zombie enemies, weapons,
                  missions, and different environments.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-7">
                  My academic involvement included project documentation
                  and preparation for the project presentation and
                  defense.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Courses */}
        <motion.section
          id="courses"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-28 scroll-mt-28"
        >
          <h2 className={sectionHeading}>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Courses & Additional Learning
            </span>
          </h2>

          <p className={sectionDescription}>
            Additional courses completed to expand my knowledge and
            technical understanding.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className={`${cardClass} p-7`}
              >
                <div className="text-4xl mb-5">{course.icon}</div>

                <h3 className="text-xl font-bold mb-3">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">
                  {course.description}
                </p>

                <p className="text-xs text-pink-600 dark:text-pink-400 font-semibold mt-5">
                  Completed
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-28 mb-16 scroll-mt-28"
        >
          <h2 className={sectionHeading}>
            <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>

          <p className={sectionDescription}>
            I welcome opportunities to begin my teaching career,
            contribute to an educational institution, and continue
            growing professionally.
          </p>

          <div className={`${cardClass} max-w-3xl mx-auto p-7 md:p-10`}>
            <div className="space-y-7">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email Address
                  </p>
                  <a
                    href="mailto:ashhnida@gmail.com"
                    className="font-semibold hover:text-pink-600 break-all"
                  >
                    ashhnida@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Phone
                  </p>
                  <a
                    href="tel:03451909906"
                    className="font-semibold hover:text-pink-600"
                  >
                    0345 1909906
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="font-semibold">
                    Punjab, Pakistan
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="mailto:ashhnida@gmail.com?subject=Teaching%20Opportunity"
                  className="inline-block w-full text-center px-7 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:opacity-90 transition"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-7 border-t border-pink-200 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="font-semibold">
            Nida Ayesha
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Computer Science Graduate | Aspiring Educator
          </p>

          <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
            © {new Date().getFullYear()} Nida Ayesha. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
