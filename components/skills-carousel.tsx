"use client"

import { motion, useAnimationControls } from 'framer-motion'
import {
  SiJavascript, SiTypescript, SiDocker, SiNodedotjs, SiNextdotjs,
  SiNestjs, SiExpress, SiMysql, SiMongodb, SiTensorflow,
  SiCss3, SiSass, SiTailwindcss, SiPython,
} from "react-icons/si"
import { FaGlobe, FaJira, FaTasks } from "react-icons/fa"
import { useEffect, useRef, useState } from 'react'

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
  { name: "Python", icon: SiPython },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "CSS", icon: SiCss3 },
  { name: "SASS", icon: SiSass },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "JIRA", icon: FaJira },
  { name: "Lokalise", icon: FaGlobe },
  { name: "Asana", icon: FaTasks },
]

const duplicatedSkills = [...skills, ...skills]

export function SkillsCarousel() {
  const controls = useAnimationControls()
  const scrollRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const scrollStartX = useRef(0)

  const momentumRef = useRef<number | null>(null)
  const velocityRef = useRef(0)
  const lastX = useRef(0)
  const lastTime = useRef(0)

  const startAnimation = () => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    })
  }

  const stopAnimation = () => {
    controls.stop()
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  const pauseThenResume = () => {
    stopAnimation()
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      startAnimation()
    }, 1500)
  }

  const onMouseEnter = () => {
    stopAnimation()
  }

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      applyMomentum()
    } else {
      startAnimation()
    }
  }

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    dragStartX.current = e.clientX
    scrollStartX.current = scrollRef.current?.scrollLeft || 0
    lastX.current = e.clientX
    lastTime.current = Date.now()
    pauseThenResume()
    cancelMomentum()
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return

    const delta = e.clientX - dragStartX.current
    scrollRef.current.scrollLeft = scrollStartX.current - delta

    const now = Date.now()
    const timeDiff = now - lastTime.current
    if (timeDiff > 0) {
      velocityRef.current = (e.clientX - lastX.current) / timeDiff
      lastX.current = e.clientX
      lastTime.current = now
    }
  }

  const onMouseUp = () => {
    setIsDragging(false)
    applyMomentum()
    pauseThenResume()
  }

  const applyMomentum = () => {
    const el = scrollRef.current
    if (!el) return

    let velocity = velocityRef.current * 100
    const decay = 0.95

    const step = () => {
      if (Math.abs(velocity) > 0.1) {
        el.scrollLeft -= velocity
        velocity *= decay
        momentumRef.current = requestAnimationFrame(step)
      }
    }

    step()
  }

  const cancelMomentum = () => {
    if (momentumRef.current !== null) {
      cancelAnimationFrame(momentumRef.current)
      momentumRef.current = null
    }
  }

  useEffect(() => {
    startAnimation()
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (momentumRef.current !== null) cancelAnimationFrame(momentumRef.current)
    }
  }, [])

  return (
    <div
      ref={scrollRef}
      className={`w-full overflow-x-scroll overflow-y-hidden py-12 relative select-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      onWheel={pauseThenResume}
      onTouchStart={pauseThenResume}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <motion.div
        className="flex space-x-16 whitespace-nowrap px-4"
        animate={controls}
        initial={{ x: "0%" }}
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