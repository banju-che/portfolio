// src/components/Projects.jsx
import React, { useState } from 'react'
import projectData from "./ProjectData";
import Details from "./ProjectDetail";


const Projects = () => {
  const [modalData, setModalData] = useState(null)

  const closeModal = () => setModalData(null)

  return (
    <section id="projects" className="py-20 px-6 lg:w-3/4 lg:mx-auto xl:px-32 relative">
      <h2 className="text-4xl font-bold text-[#795548] mb-12 text-center">Projects</h2>
      <div className="space-y-20">
        {projectData.map((p, i) => (
          <div
            key={p.title}
            className={`flex flex-col lg:items-center lg:justify-between lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <img
              src={p.imgSrc}
              alt={`${p.title} screenshot`}
              className="w-full lg:w-1/2 rounded-xl shadow-lg object-cover"
            />
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-semibold text-[#795548]">{p.title}</h3>
              <p className="text-gray-800 text-lg">{p.description}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setModalData(p)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-md transition"
                >
                  See Details
                </button>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-yellow-400 text-yellow-900 font-semibold py-2 px-4 rounded-md hover:bg-yellow-100 transition"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <Details project={modalData} onClose={closeModal} />
        </div>
      )}

    </section>
  )
}

export default Projects
