import React from "react";
import Tesla from "../assets/Tesla.jpg";
import Weather from "../assets/Weather.jpg";
import Meta from "../assets/meta.jpg";
import Chatbot from "../assets/chatbot.png";
import QRScanner from "../assets/QRScanner.png";
import Blogify from "../assets/blogify.png";
import Fitness from "../assets/Fitness.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-32">
          <p className="text-4xl font-bold inline border-b-4 border-red-400">
            Projects
          </p>
          <p className="py-4">Check out some of my recent projects!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Tesla})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tesla Application
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://muhammadhamza14210.github.io/Tesla-Clone/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/muhammadhamza14210/Tesla-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather Application
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://muhammadhamza14210.github.io/Weather-Application/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/muhammadhamza14210/Weather-Application"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Meta})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Meta Messenger App
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://github.com/muhammadhamza14210/Meta-Messenger-2.0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/muhammadhamza14210/Meta-Messenger-2.0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Chatbot})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ChatGPT AI App
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://chat-gpt-ai-muhammad-hamza.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/muhammadhamza14210/ChatGPT-AI-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${QRScanner})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                AttendEase Application
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://github.com/CMPUT301-W24-T54/AttendEase.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/CMPUT301-W24-T54/AttendEase.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Blogify})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Blogify Application
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://hamzas-blog.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/muhammadhamza14210/Blog.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Fitness})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Fitness Application
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://github.com/muhammadhamza14210/FitnessTracker.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/muhammadhamza14210/FitnessTracker.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
