// src/components/Contact.jsx
import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTelegramPlane
} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="bg-yellow-50 py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-[#795548] mb-8">Contact Me</h2>

      <p className="max-w-2xl mx-auto text-lg text-gray-800 mb-8">
        Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas.
        Let's connect and create something impactful together.
      </p>

      {/* Contact Info */}
      <div className="mb-12 space-y-4 text-gray-700">
        <div className="flex justify-center items-center gap-2 text-lg">
          <FaPhoneAlt className="text-yellow-600" />
          <span>+254 711 449 646</span>
        </div>
        <div className="flex justify-center items-center gap-2 text-lg">
          <FaEnvelope className="text-yellow-600" />
          <span>juliusgacheru021@gmail.com</span>
        </div>
        <div className="flex justify-center items-center gap-2 text-lg">
          <FaMapMarkerAlt className="text-yellow-600" />
          <span>Clayworks, Kasarani, Kenya</span>
        </div>
      </div>

      {/* Social & Messaging Links */}
      <div className="flex justify-center flex-wrap gap-6 text-3xl text-[#795548]">
        <a
          href="https://github.com/banju-che"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="www.linkedin.com/in/julius-gacheru-ba64b0345"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:juliusgacheru021@gmail.com"
          className="hover:text-yellow-500 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/254711449646"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://t.me/banjuche"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaTelegramPlane />
        </a>
      </div>
    </section>
  )
}

export default Contact
