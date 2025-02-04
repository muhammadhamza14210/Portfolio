import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import PageContainer from "./PageContainer";

const Home = () => {
  return (
    <PageContainer name="home">
      <div className="mt-40">
        <p className="text-yellow-300 text-2xl mb-4 ml-2 tracking-widest uppercase animate-fadeIn">
          Hi, my name is
        </p>
        <h1 className="text-5xl sm:text-8xl font-extrabold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4 animate-glow">
          Muhammad Hamza!
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-200 mb-4 animate-fadeInSlow">
          <Typewriter
            options={{
              strings: [
                "Computer Science Student",
                "FrontEnd Developer",
                "BackEnd Developer"
              ],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
              deleteSpeed: 50
            }}
          />
        </h2>
        <p className="text-gray-300 py-4 max-w-[700px] text-lg leading-relaxed animate-fadeIn">
          A dedicated final-year Computer Science student with a keen interest
          in software development and data science. I specialize in creating
          scalable, interactive web applications that deliver exceptional user
          experiences.
        </p>
        <div className="mt-4 flex lg:justify-start justify-center">
          <button className="text-white font-semibold group border-2 border-purple-500 px-8 py-3 my-2 flex items-center rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-500 hover:border-purple-700 shadow-lg hover:shadow-purple-700/50">
            <Link to="work" spy={true} smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 transition-transform duration-300 ease-in-out">
              <HiArrowNarrowRight className="ml-3 text-xl" />
            </span>
          </button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
