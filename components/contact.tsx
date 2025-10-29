"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-black">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center text-balance">Have an Idea? Let's Build It.</h2>
        <p className="text-gray-400 text-center mb-12">
          Get in touch with our team to discuss your project and how we can help bring your vision to life.
        </p>

        <form onSubmit={handleSubmit} className="bg-gray-900/50 border border-green-500/20 rounded-2xl p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-green-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-green-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-black border border-green-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
