import React from 'react'

const Hero = () => {
  return (
    <section className="bg-yellow-50 w-screen min-h-screen flex justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-12">
        <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-20 lg:w-3/4 lg:mx-auto">
            
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#795548] mb-6">
                Hey, I'm Julius Gacheru 👷🏾‍♂️
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-6 max-w-2xl mx-auto md:mx-0 text-gray-800">
                 From working in hands-on, detail-oriented trades to structuring fullstack web applications — I bring practical experience and a builder’s mindset to every project. Using React, Django, and Tailwind, I focus on writing clean, maintainable code that solves real-world problems.
            </p>
            <a
                href="#projects"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-md shadow-md transition"
            >
                View My Projects 🔨
            </a>
            </div>

            {/* Image */}
            <div className="relative flex-1 hidden md:block max-w-sm lg:max-w-[700px]">
            <img
                src="/Project-images/my-image/no bg.png"
                alt="my profile pic"
                className=" w-full  object-cover"
            />

            </div>

        </div>
      </section>

  )
}

export default Hero
