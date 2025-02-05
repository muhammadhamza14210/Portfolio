import React from "react";
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import PageContainer from "./PageContainer";

const Home = () => {
  return (
    <PageContainer name="home">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mt-40"
      >
        {/* Floating Glow */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-purple-500/10 blur-3xl rounded-full"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 0.3, scale: 1.1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        />

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-yellow-300 text-2xl mb-4 ml-2 tracking-widest uppercase"
        >
          Hi, my name is
        </motion.p>

        {/* Name with Letter Stagger Animation */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl sm:text-8xl font-extrabold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4"
        >
          {Array.from("Muhammad Hamza!").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.05, delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Typewriter Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-7xl font-bold text-gray-200 mb-4"
        >
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
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-gray-300 py-4 max-w-[700px] text-lg leading-relaxed"
        >
          A dedicated final-year Computer Science student with a keen interest
          in software development and data science. I specialize in creating
          scalable, interactive web applications that deliver exceptional user
          experiences.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 flex lg:justify-start justify-center relative z-100"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: [0, 2, -2, 2, 0] }}
            transition={{ duration: 0.3 }}
            className="text-white font-semibold group border-2 border-purple-500 px-8 py-3 my-2 flex items-center rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-500 hover:border-purple-700 shadow-lg hover:shadow-purple-700/50"
          >
            <Link to="work" spy={true} smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 transition-transform duration-300 ease-in-out">
              <HiArrowNarrowRight className="ml-3 text-xl" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
};

export default Home;
