"use client"

import { motion, useAnimationControls } from 'framer-motion'
import {
  SiJavascript, SiTypescript, SiDocker, SiNodedotjs, SiNextdotjs, 
  SiNestjs, SiExpress, SiMysql, SiMongodb, SiTensorflow, 
  SiCss3, SiSass, SiTailwindcss
} from "react-icons/si"
import { useEffect } from 'react'

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Docker", icon: SiDocker },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Nest.js", icon: SiNestjs },
  { name: "Express", icon: SiExpress },
  { name: "SQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "AI", icon: SiTensorflow },
  { name: "CSS", icon: SiCss3 },
  { name: "SASS", icon: SiSass },
  { name: "Tailwind", icon: SiTailwindcss },
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