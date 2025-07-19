// src/components/Skills.jsx
import React from 'react'
import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa'
import { SiDjango, SiTailwindcss, SiJavascript, SiPostgresql } from 'react-icons/si'

const skills = {
  Frontend: [
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-700" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  ],
  Backend: [
    { name: 'Python', icon: <FaPython className="text-blue-600" /> },
    { name: 'Django', icon: <SiDjango className="text-green-800" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-600" /> },
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
  ],
}

const Skills = () => {
  return (
    <section id="skills" className="bg-yellow-50 py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-[#795548] mb-12">Tech Stack / Skills</h2>

      <div className="space-y-14 max-w-5xl mx-auto">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-2xl font-bold text-[#795548] mb-6">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skillList.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className="flex flex-col items-center justify-center transition duration-300"
                >
                  <div className="text-5xl mb-3">{skill.icon}</div>
                  <p className="text-lg font-medium text-gray-800">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
