import React from "react";
import PageContainer from "./PageContainer";
import { projects, techColors } from "../utils/constants";

const Work = () => {
  return (
    <PageContainer name="work">
      <div className="w-full flex flex-col items-center py-16 px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500">
            Projects
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            A showcase of my recent projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/90 p-4 rounded-xl shadow-lg hover:shadow-yellow-500/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-lg font-bold text-yellow-400 mt-4">
                {project.title}
              </h3>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${techColors[tech]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 text-center bg-yellow-500 text-gray-900 py-2 rounded-lg font-bold hover:bg-yellow-600 transition-all duration-300"
                >
                  Demo
                </a>

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 text-center bg-gray-700 text-white py-2 rounded-lg font-bold hover:bg-gray-600 transition-all duration-300 ml-2"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Work;