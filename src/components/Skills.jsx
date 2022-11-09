import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Github from '../assets/github.png'
import Python from '../assets/python.png'
import C from '../assets/c.png'

const Skills = () => {
  return (
    <div name = 'skills' className = 'w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className = 'text-4xl font-bold inline border-b-4 border-red-400'>Skills</p>
                <p className = 'py-4'>A list of all the technologies I have worked with so far.</p>
            </div>

            <div className = 'w-full grid grid-cols-2 sm:grid-cols-3 gap-5 text-center py-6'>

                <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className = 'w-20 mx-auto' src = {HTML} alt = 'HTML icon'></img>
                    <p className = 'py-4'>HTML</p>
                </div>

                <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className = 'w-20 mx-auto' src = {CSS} alt = 'CSS icon'></img>
                    <p className = 'py-4'>CSS</p>
                </div>

                <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className = 'w-20 mx-auto' src = {Python} alt = 'Python icon'></img>
                    <p className = 'py-4'>PYTHON</p>
                </div>

                <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className = 'w-20 mx-auto' src = {Github} alt = 'Github icon'></img>
                    <p className = 'py-4'>GITHUB</p>
                </div>

                <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className = 'w-20 mx-auto' src = {JavaScript} alt = 'JavaScript icon'></img>
                    <p className = 'py-4'>JAVASCRIPT</p>
                </div>

                <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-300'> 
                    <img className = 'w-20 mx-auto' src = {C} alt = 'C icon'></img>
                    <p className = 'py-4'>C</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills