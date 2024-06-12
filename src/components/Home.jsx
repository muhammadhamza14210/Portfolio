import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name = 'home' className = 'w-full h-screen bg-[#0a192f]'>

      <div className = 'max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className = 'text-yellow-100 text-2xl'>Hi, my name is </p>
        <h1 className = 'text-red-500 text-4xl font-bold sm:text-7xl ml-[-4px]'>Muhammad Hamza!</h1>
        <h2 className = 'text-4xl font-bold sm:text-7xl ml-[-4px] text-[#8892b0]'>Computer Science Student</h2>
        <p className = 'text-[#8892b0] py-4 max-w-[700px]'>Third year computer science student interested in software development 
           and data science.
        </p>
        <div>
          <button className = 'text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 duration-200 hover:border-red-500'>
            <Link to="work" spy={true} smooth={true}  duration={500}>View Work</Link> 
          <span className = 'group-hover:rotate-90 duration-200'>
            <HiArrowNarrowRight className = 'ml-3'/>
          </span>
          </button>
        </div>
  
      </div>
    </div>
  )
}

export default Home