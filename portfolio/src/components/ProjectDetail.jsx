import React from "react";

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return <p className="text-center text-gray-500 mt-10">No project selected</p>;

  const { title, description, imgSrc, details, techStack, features, repo } = project;

  return (
    <div className="relative max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-8 mt-10 border border-gray-200">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-gray-400 hover:text-red-500 text-3xl font-bold transition-all"
        aria-label="Close"
      >
        &times;
      </button>

      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>

      {/* Summary */}
      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        <span className="font-semibold text-gray-800">Summary:</span> {description}
      </p>

      {/* Image Gallery */}
      <div className="flex flex-wrap gap-4 justify-start mb-8">
        {imgSrc.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} screenshot ${index + 1}`}
            className="w-44 h-auto rounded-lg border border-gray-300 shadow-sm hover:scale-105 transition-transform"
          />
        ))}
      </div>

      {/* Details */}
      <p className="text-gray-700 mb-6 text-lg">
        <span className="font-semibold text-gray-800">Details:</span> {details}
      </p>

      {/* Tech Stack */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Tech Stack</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {techStack.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Features</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* GitHub Link */}
      <div className="mt-6">
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          🔗 View GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
