"use client"

import { motion } from 'framer-motion'
import { NavMenu } from '@/components/nav-menu'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const posts = [
  {
    title: "Understanding Modern Web Architecture",
    excerpt: "An in-depth look at modern web architecture patterns and best practices for scalable applications.",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    slug: "understanding-modern-web-architecture"
  },
  {
    title: "The Future of Frontend Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of frontend development.",
    date: "2024-03-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    slug: "future-of-frontend-development"
  },
  // Add more blog posts as needed
]

export default function Blog() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Truthy</h1>
          <p className="text-xl text-muted-foreground">Thoughts and insights about software development</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 mb-16">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64 md:h-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                </div>
                <Button asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}