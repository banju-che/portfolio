// src/components/About.jsx
import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="bg-yellow-50 text-gray-900 py-20 px-6 text-center"
    >
      <h2 className="text-4xl font-bold text-[#795548] mb-6">About Me</h2>

      <p className="max-w-3xl mx-auto text-lg leading-relaxed font-medium">
        My name is <span className="font-bold">Julius Gacheru</span>. I studied Building Construction Technology at a polytechnic, where I focused on practical skills like bricklaying, plastering, and carpentry. Over the years, I’ve worked on-site as a mason, learning the value of structure, accuracy, and hard work.

        <br /><br />

        Outside construction, I’ve also been involved in part-time farming — a space where patience and consistency matter just as much. Both of these paths have taught me to stay grounded and keep learning.

        <br /><br />

        As I developed an interest in technology, I began studying programming independently. I’m now focused on fullstack web development, mainly using <span className="font-semibold">React</span> on the frontend and <span className="font-semibold">Django</span> with Django REST Framework on the backend. I also work with tools like <span className="font-semibold">Tailwind CSS</span> for styling and <span className="font-semibold">JWT</span> for secure authentication.

        <br /><br />

        My goal is to grow as a developer by building clean, functional, and reliable applications — always with the same discipline and care I’ve applied in construction and farming.
      </p>
    </section>
  )
}

export default About
