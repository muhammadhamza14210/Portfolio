import React from "react";
import PageContainer from "./PageContainer";
import { experienceData } from "../utils/constants";

const Experience = () => {
  return (
    <PageContainer name="experience">
      <div className="w-full text-gray-300 flex flex-col items-center py-16 px-4">
        <div className="max-w-4xl w-full relative">
          {/* Section Title */}
          <div className="text-center pb-12">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500">
              Experience
            </h2>
          </div>

          {/* Timeline Container */}
          <div
            className="relative space-y-16 before:absolute before:left-[25px] before:top-0 
          before:h-full before:w-1 before:bg-gradient-to-b from-red-500 to-yellow-400"
          >
            {experienceData.map((experience, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline Marker */}
                <div
                  className="absolute left-4 top-0 w-6 h-6 bg-gradient-to-br from-red-500 
                to-yellow-400 rounded-full border-4 border-gray-900 shadow-md group-hover:scale-125 
                transition-transform duration-300"
                ></div>

                {/* Experience Box */}
                <div
                  className="ml-16 bg-gray-800/80 p-6 sm:p-8 rounded-2xl shadow-lg transition-all 
                duration-500 hover:scale-105 hover:shadow-red-400/40 border border-gray-700"
                >
                  {/* Job Role */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-yellow-400 mb-2">
                    {experience.role}
                  </h3>

                  {/* Company Name */}
                  <p className="text-lg font-semibold text-gray-300 italic mb-2">
                    {experience.company}
                  </p>

                  {/* Time Period */}
                  <p className="text-sm text-gray-400 mb-4">
                    {experience.period}
                  </p>

                  {/* Job Responsibilities */}
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                    {experience.details.map((point, i) => (
                      <li key={i} className="text-gray-300">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Experience;
