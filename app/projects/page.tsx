"use client"

import { motion } from 'framer-motion'
import { NavMenu } from '@/components/nav-menu'
import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: "Mjcal Fintech: Personal Finance",
    description: "A full-stack finance application built with Next.js, TypeScript, and functional APIs to Plaid, Appwrite, Sentry, and Dwolla.",
    image: "fintech-tn.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "APIs"],
    github: "https://github.com/mjcaldev/banking-app",
    demo: "https://mjcal-fintech-one.vercel.app/sign-in"
  },
  {
    title: "Dentist Website",
    description: "Built with Vite, React, and Typescript, and AWS this is a simple, modern site with working pages and forms.",
    image: "dentist-tn.png",
    tags: ["React", "Vite", "AWS"],
    github: "https://github.com/mjcaldev/dentist-ctg",
    demo: "https://dentist-ctg.vercel.app/"
  },
  {
    title: "Barbershop Multi-Tier Site",
    description: "Built for a happy client, this site is slightly more advanced to address other common needs",
    image: "barber-tn.png",
    tags: ["React", "Next.js", "TypeScript"],
    github: "https://github.com/mjcaldev/barbershop-client",
    demo: "https://barbershop-client-ruddy.vercel.app/"
  },
  {
    title: "Truthy Blog Site",
    description: "This site has the essentials for any blogger and is currently in use as my career blog!",
    image: "truthy-tn.png",
    tags: ["React", "Next.js", "TypeScript"],
    github: "https://github.com/mjcaldev/truthy",
    demo: "https://www.truthy.io/"
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-background">
      <NavMenu />
      
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground">A collection of my recent work and side projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}