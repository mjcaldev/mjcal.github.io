"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (status === "error") {
      setStatus("idle")
      setErrorMessage("")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name.trim()) {
      setErrorMessage("Please enter your name.")
      setStatus("error")
      return
    }

    if (!form.email.trim()) {
      setErrorMessage("Please enter your email.")
      setStatus("error")
      return
    }

    if (!isValidEmail(form.email.trim())) {
      setErrorMessage("Please enter a valid email address.")
      setStatus("error")
      return
    }

    if (!form.message.trim()) {
      setErrorMessage("Please enter your message.")
      setStatus("error")
      return
    }

    setErrorMessage("")
    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })

        toast({
          title: "Message sent ✅",
          description: "Thanks for reaching out! I’ll get back to you in 1-2 business days.",
        })
      } else {
        throw new Error(data.error || "Unknown error")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later or email me directly.",
      })
    }
  }

  const getInputClass = (field: keyof typeof form) =>
    `w-full p-3 rounded-md bg-card border ${
      status === "error" && !form[field].trim() ? "border-red-500" : "border-border"
    }`

  return (
    <div className="max-w-md mx-auto">
      {status === "success" ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-5 rounded text-center space-y-2">
          <p className="text-lg font-semibold">✅ Message sent!</p>
          <p>Thanks for reaching out! I’ll get back to you in 1–2 business days. - Micheal</p>
        </div>
      ) : (
        <>
    <div className="space-y-12">
    <h2 className="text-4xl font-semibold mb-4 text-center">Leave me a note</h2>

    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className={getInputClass("name")}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className={getInputClass("email")}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        className={getInputClass("message")}
      />
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "error" && errorMessage && (
        <p className="text-red-500 text-sm">❌ {errorMessage}</p>
      )}
    </form>
    </div>
    </>
    )}
  </div>
  )
}