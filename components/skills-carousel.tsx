"use client"

import { motion, useAnimationControls } from 'framer-motion'
import { 
  Code2, 
  FileJson, 
  Container as Docker, 
  Server, 
  Boxes, 
  Workflow, 
  Terminal, 
  Database, 
  Brain, 
  Palette, 
  Brush, 
  Layout 
} from 'lucide-react'
import { useEffect } from 'react'

const skills = [
  { name: 'JavaScript', icon: Code2 },
  { name: 'TypeScript', icon: FileJson },
  { name: 'Docker', icon: Docker },
  { name: 'Node.js', icon: Server },
  { name: 'Next.js', icon: Boxes },
  { name: 'Nest.js', icon: Workflow },
  { name: 'Express', icon: Terminal },
  { name: 'SQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'AI', icon: Brain },
  { name: 'CSS', icon: Palette },
  { name: 'SASS', icon: Brush },
  { name: 'Tailwind', icon: Layout },
]

// Duplicate the skills array to create a seamless loop
const duplicatedSkills = [...skills, ...skills]

export function SkillsCarousel() {
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    })
  }, [controls])

  return (
    <div className="w-full overflow-hidden py-12 relative">
      <motion.div
        className="flex space-x-16 whitespace-nowrap"
        animate={controls}
        initial={{ x: "0%" }}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => {
          controls.start({
            x: "-50%",
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          })
        }}
      >
        {duplicatedSkills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={`${skill.name}-${index}`}
              className="inline-flex flex-col items-center justify-center"
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <Icon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}