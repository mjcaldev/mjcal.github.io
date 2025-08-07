"use client"

import { motion } from 'framer-motion'
import { NavMenu } from '@/components/nav-menu'

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavMenu />

      <section className="pt-24 px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Learn more about who I am, how I work, and what drives me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card p-6 rounded-lg shadow-lg space-y-6"
        >
          <p>
            I am genuinely glad to meet you. My name is Micheal John Callaghan. I started my career as a Community Manager and Client Success Specialist. While I have spent a lot of time self educating into Web Development, Software Engineering, Project Management, and Solutions Architecutre, I have always kept the client as my number one priority.
          </p>

          <p>
            After leading or operationalizing over 15 international launches of Software as a Service and Software as a Medical Device, I have garnered a strong understanding of the full picture required to implement meaningful technology that solves problems effectively.
          </p>

          <p>
            My recent work includes developing and localizing international webistes, building finance platforms, dashboard UIs, and internal tools—leveraging APIs like OpenAI, AWS Lambda, Plaid, Appwrite, and Dwolla.
          </p>

          <p>
            Outside of building technical solutions, I’m a songwriter, singer, musician, and ministry leader. I believe in using the gifts of logic and creativity to leave a meaningful impact on our communities and the world.
          </p>
        </motion.div>
      </section>
    </main>
  )
}