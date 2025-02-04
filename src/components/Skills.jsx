import React from "react";
import PageContainer from "./PageContainer";
import { Icon } from "@iconify/react";
import jsIcon from "@iconify-icons/logos/javascript";
import tsIcon from "@iconify-icons/logos/typescript-icon";
import reactIcon from "@iconify-icons/logos/react";
import nextIcon from "@iconify-icons/logos/nextjs-icon";
import nodeIcon from "@iconify-icons/logos/nodejs-icon";
import expressIcon from "@iconify-icons/simple-icons/express";
import mongoIcon from "@iconify-icons/logos/mongodb";
import postgresIcon from "@iconify-icons/logos/postgresql";
import dockerIcon from "@iconify-icons/logos/docker";
import firebaseIcon from "@iconify-icons/logos/firebase";
import javaIcon from "@iconify-icons/logos/java";
import pythonIcon from "@iconify-icons/logos/python";

const skills = [
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Java", icon: javaIcon },
  { name: "React", icon: reactIcon },
  { name: "Next.js", icon: nextIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "PostgreSQL", icon: postgresIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Firebase", icon: firebaseIcon }
];

const Skills = () => {
  return (
    <PageContainer name="skills">
      <div
        className="relative flex flex-col items-center w-full min-h-screen overflow-y-auto px-4 
      sm:px-6 py-8 sm:py-16 pb-8 md:pb-24"
      >
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500 drop-shadow-lg">
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 shadow-lg 
              transition-transform duration-500 hover:scale-105 hover:shadow-blue-500/50 flex flex-col 
              items-center justify-center min-w-[90px] sm:min-w-[120px] min-h-[100px] sm:min-h-[120px] 
              md:min-h-[140px]"
            >
              {/* Animated Glow Effect */}
              <div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 
              to-purple-500 opacity-0 rounded-xl transition-opacity duration-500 hover:opacity-20"
              ></div>

              {/* Icon */}
              <Icon
                icon={skill.icon}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white"
              />

              {/* Skill Name */}
              <p className="text-white text-xs sm:text-sm md:text-lg font-semibold mt-2 sm:mt-3 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Skills;
