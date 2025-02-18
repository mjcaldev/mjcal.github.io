"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NavMenu } from '@/components/nav-menu'
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiCodewars, SiDiscord, SiFreecodecamp } from "react-icons/si";
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SkillsCarousel } from '@/components/skills-carousel'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const socialLinks = [
    { href: "https://github.com", Icon: FaGithub },
    { href: "https://linkedin.com", Icon: FaLinkedin },
    { href: "https://x.com", Icon: FaXTwitter},
    { href: "https://www.codewars.com", Icon: SiCodewars },
    { href: "https://discord.com", Icon: SiDiscord },
    { href: "https://www.freecodecamp.org", Icon: SiFreecodecamp },
  ]

  return (
    <main className="min-h-screen bg-background">
      <NavMenu />
      
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center px-4 max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <img
              src="mjcal-profile.jpg"
              alt="MJ Cal"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Micheal J. Callaghan (mjcal)
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mx-auto border border-border/40 rounded-lg p-4 mb-8"
            >
              <p className="text-sm text-muted-foreground">
                Hi, I'm Micheal, it's nice to meet you! I'm a fullstack software engineer with a strong background in JavaScript and Python as well as AI powered tools like Bolt, Replit, and Tempo Labs. I have also program/project managed for multiple global applications. I bring business value, voice of user, and organization to every project I engineer.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
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
                      damping: 10 
                    }
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
          </div>
        </motion.div>
      </section>

      {/* Skills Carousel */}
      <SkillsCarousel />

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What I Bring to the Table</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-lg bg-card flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Technical Excellence</h3>
              <p className="text-muted-foreground">Proven track record of delivering high-quality software solutions using modern technologies and best practices.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="p-6 rounded-lg bg-card flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Problem Solving</h3>
              <p className="text-muted-foreground">Analytical mindset with a passion for solving complex technical challenges and optimizing solutions.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="p-6 rounded-lg bg-card flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-muted-foreground">Strong team player with excellent communication skills and experience in cross-functional environments.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="p-6 rounded-lg bg-card flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">Passionate about staying current with emerging technologies and bringing innovative solutions to the table.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects and Blog Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Projects */}
            <div className="text-center bg-background/80 p-12 rounded-lg transition-all duration-500 hover:bg-background">
              <h2 className="text-3xl font-bold mb-8">My Projects</h2>
              <Button asChild size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
            
            {/* Blog */}
            <div className="text-center bg-black/80 p-12 rounded-lg transition-all duration-500 hover:bg-black">
              <h2 className="text-3xl font-bold mb-8">Truthy</h2>
              <Button asChild size="lg" variant="secondary">
                <Link href="/blog">Read My Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <form className="max-w-md mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-card border border-border"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-card border border-border"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-md bg-card border border-border"
            />
            <Button size="lg" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>
    </main>
  )
}