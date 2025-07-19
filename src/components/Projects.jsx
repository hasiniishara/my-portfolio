import React from "react";

const project = {
  name: "Online Parking System",
  stack:
    "HTML, TypeScript, React.js, Redux, Express.js, MongoDB, REST API, Netlify (Frontend), Render (Backend)",
  description:
    "A smart, cloud-hosted parking management system with real-time availability tracking and reservation. Built using a MERN stack with a responsive UI. Designed for simplicity and efficiency across devices.",
  githubLink: "https://github.com/hasiniishara/OnlineParkingSystem",
  liveLink: "https://parkmeonline.netlify.app/",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-3xl mx-auto px-6 py-10 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-6 border-b-4 border-pink-400 inline-block pb-1">
        Projects
      </h2>

      <div className="bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-pink-700 mb-2">
          {project.name}
        </h3>

        <p className="text-purple-500 italic mb-2">
          <strong>Tech Stack:</strong> {project.stack}
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            GitHub
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}
