import React from 'react'

const About = () => {
  return (
    <div name = 'about' className = 'w-full h-screen bg-[#0a192f] text-gray-300'>

      <div className = 'flex flex-col justify-center items-center w-full h-full'>

        <div className = 'max-w-[1000px] w-full grid grid-cols-2'>

          <div className = 'sm:text-right pb-8 pl-4'>

            <p className = 'text-4xl font-bold inline border-b-4 border-red-500'>About</p>

          </div>

        <div></div>

        </div>

        <div className = 'max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>

          <div>
            <p className = 'sm:text-right text-4xl font-extrabold'>Hi! I am Muhammad Hamza, nice to meet you.</p>
          </div>

          <div>
            <p> A second year computer science student looking to step in the tech industry with an interest in software development, cyber
              security and data science.I'm passionate in developing software that improves the lives of
              those around me. As a university student i try to look for opportunity wherever
              possible. I'm dedicated to improve my skills and exceed expectations to build 
              ground breaking software as per client requirements to help boost the company.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About