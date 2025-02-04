import React from "react";
import PageContainer from "./PageContainer";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import Resume from "../assets/HamzaLatestResume-Jan2025.pdf";

const Contact = () => {
  return (
    <PageContainer name="contact">
      <div className="w-full min-h-[80vh] flex flex-col justify-center items-center px-6 relative">
        {/* Subtle Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-30"></div>

        {/* Content Section */}
        <div className="relative z-10 text-center">
          {/* Section Title */}
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500">
            Let's Connect
          </h2>
          <p className="text-gray-400 mt-4 text-xl max-w-2xl mx-auto">
            Feel free to reach out via email or connect on social media. I’m
            always open to discussing new projects, creative ideas, or
            opportunities.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 text-2xl mt-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/muhammad-hamza-4578211ab/"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/muhammadhamza14210"
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white p-3 rounded-full hover:bg-gray-900 transition duration-300"
            >
              <FaGithub />
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row sm:justify-center gap-4">
            {/* Email Button */}
            <a
              href="mailto:muhammadhamza14210@gmail.com"
              className="bg-red-500 text-white px-6 py-4 rounded-lg text-lg font-semibold flex items-center justify-center hover:bg-red-600 transition duration-300 shadow-lg"
            >
              <FaEnvelope className="mr-3 text-xl" /> Email Me
            </a>

            {/* Resume Download Button */}
            <a
              href={Resume}
              target="_blank"
              rel = 'noreferrer'
              className="bg-gray-800 text-white px-6 py-4 rounded-lg text-lg font-semibold flex items-center justify-center hover:bg-gray-700 transition duration-300 shadow-lg"
            >
              <FaDownload className="mr-3 text-xl" /> View Resume
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;