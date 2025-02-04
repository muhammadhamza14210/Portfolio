import React from "react";
import PageContainer from "./PageContainer";
import Profile from "../assets/profilepic.png";

const About = () => {
  return (
    <PageContainer name="about">
      <div className="relative flex flex-col justify-center items-center min-h-screen w-full py-12 px-4">
        {/* Content Container */}
        <div className="relative z-10 max-w-[1000px] w-full">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500 drop-shadow-lg">
              About Me
            </h2>
          </div>
          {/* Responsive Layout */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-500">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="text-base md:text-lg text-white space-y-4 md:space-y-6">
              <p className="leading-relaxed">
                Hello! I’m Muhammad Hamza, a passionate final-year computer
                science student dedicated to crafting exceptional digital
                experiences. My journey in tech is fueled by a love for software
                development, cybersecurity, and data science.
              </p>
              <p className="leading-relaxed">
                I focus on innovation and strive to develop solutions that not
                only solve problems but also create delightful, user-centric
                experiences. I thrive on challenges and continuously seek
                opportunities to learn and grow.
              </p>
              <p className="leading-relaxed">
                Let’s create something remarkable together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default About;
