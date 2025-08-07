"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavMenu } from "@/components/nav-menu";
import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { SiCodewars, SiDiscord, SiFreecodecamp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { SkillsCarousel } from "@/components/skills-carousel";
import { AnimatedBorderCard } from "@/components/AnimatedBorderCard";

import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialLinks = [
    { href: "https://github.com/mjcaldev", Icon: FaGithub },
    { href: "https://linkedin.com/in/mjcal", Icon: FaLinkedin },
    { href: "https://x.com/mjcaldev", Icon: FaXTwitter },
    { href: "https://www.codewars.com/users/mjcaldev", Icon: SiCodewars },
    { href: "https://discord.gg/JNszyQn8", Icon: SiDiscord },
    { href: "https://www.freecodecamp.org/mjcaldev", Icon: SiFreecodecamp },
    {
      href: "https://wa.me/+18453465537?text=Hey%2C%20Micheal%21%20%F0%9F%91%8B%20I%27m%20reaching%20out%20to%20you%20from%20your%20website%20mjcal.dev%20regarding%20your%20digital%20services.",
      Icon: FaWhatsapp,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <NavMenu />

      {/* Hero Section */}
      <section
        id="Home"
        className="min-h-screen flex items-center justify-center relative px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <img
            src="/mjcal-profile.jpg"
            alt="MJ Cal"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Micheal J. Callaghan (mjcal)
          </motion.h1>

          <motion.ul
            className="mx-auto space-y-4 text-sm md:text-base text-muted-foreground max-w-md md:max-w-lg"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
          >
            {[
              {
                icon: "👨‍💻",
                title: "Software Engineer",
                text: "Fullstack Web & App Engineer specializing JavaScript, Python, APIs, & AI",
              },
              {
                icon: "🧠",
                title: "Project Manager",
                text: "PMP-certified | Led 15+ SaaS & SaMD launches and organized multiple B2B enterprise solutions",
              },
              {
                icon: "🚀",
                title: "Solutions Arhitect",
                text: "AWS Certified | I connect real business problems to the best technical solutions",
              },
              {
                icon: "🌍",
                title: "Experience",
                text: "I work with global & local clients shaping technology to fit their varying business needs",
              },
              {
                icon: "💬",
                title: "Let's Talk",
                text: "People always come first. I can't wait to meet you and find out how I can be of service",
              },
            ].map(({ icon, title, text }, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-start gap-3"
              >
                <span className="text-xl min-w-[1.5rem]">{icon}</span>
                <span className="text-left">
                  <strong>{title}:</strong> {text}
                </span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-lg font-semibold text-muted-foreground mt-10 mb-6"
          >
            Check out my socials and get in touch!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex justify-center space-x-4"
          >
            {socialLinks.map(({ href, Icon }, index) => (
              <motion.div
                key={href}
                whileHover={{
                  y: -8,
                  scale: 1.2,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
              >
                <Link
                  href={href}
                  target="_blank"
                  className="hover:text-primary transition-colors block"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mt-6"
          >
            <Link
              href="/about"
              className="inline-block px-6 py-2 border border-primary rounded-full text-sm text-primary hover:bg-primary hover:text-background transition-colors"
            >
              Learn More About Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Carousel */}
      <SkillsCarousel />

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What I Bring to the Table
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-lg bg-card flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-xl font-semibold mb-4">
                Full-Stack Engineering
              </h3>
              <p className="text-muted-foreground">
                Well versed in many technologies like JavaScript, Python, APIs, AI,
                Oauth, Cloud, I focus on how I can use them to build comprehensive solutions that solve the business problem.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="p-6 rounded-lg bg-card flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Solutions Oriented</h3>
              <p className="text-muted-foreground">
                As a PMP certified project manager and AWS Certified Solutions
                Architect, I build solutions to real business problems with
                <strong>timeline and budget</strong> at top of mind.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="p-6 rounded-lg bg-card flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-muted-foreground">
                I regularly lead and contribute to multilingual, multicutltural
                teams using tools like Asana, Notion, JIRA, Excalidraw, and
                Loom. Whether I work with your team or need to supply my own, I
                look forward to it!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="p-6 rounded-lg bg-card flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Rapid Learning</h3>
              <p className="text-muted-foreground">
                As a self-educated Software Engineer, Project Manager, and
                Solutions Architect, I am well experienced at using the best
                online resources to quickly establish fundamental
                understanding of any project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects and Blog Section */}
      <section className="flex items-center justify-center py-24 px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-24">
          {/* Projects Card */}
          <AnimatedBorderCard>
            <h2 className="text-3xl font-bold mb-10">
              Check out a few of my projects!
            </h2>
            <Button asChild size="lg">
              <Link href="/projects">Go to projects</Link>
            </Button>
          </AnimatedBorderCard>

          {/* Truthy Card */}
          <AnimatedBorderCard>
            <h2 className="text-3xl font-bold mb-10">Truthy</h2>
            <Button asChild size="lg" variant="secondary">
              <Link
                href="https://truthy.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jump to Truthy.io
              </Link>
            </Button>
          </AnimatedBorderCard>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Leave me a note!</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
