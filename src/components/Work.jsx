import React from 'react'
import Tesla from '../assets/Tesla.jpg'
import Weather from '../assets/Weather.jpg'
import Meta from '../assets/meta.jpg'

const Work = () => {
  return (
    <div name ='work' className = 'w-full md:h-screen bg-[#0a192f] text-gray-300'>

        <div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className = 'pb-8'>
                <p className = 'text-4xl font-bold inline border-b-4 border-red-400'>Projects</p>
                <p className = 'py-4'>Check out some of my recent projects!</p>
            </div>

            <div className = 'grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                <div style = {{backgroundImage: `url(${Tesla})`}}
                className = 'shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div'>
                    {/*Hover Effect */}
                    <div className = 'opacity-0 group-hover:opacity-100'>
                        <span className = 'text-2xl font-bold text-white tracking-wider'> 
                        Tesla Application
                        </span>
                        

                        <div className = 'pt-8 text-center'>
                            <a href='https://muhammadhamza14210.github.io/Tesla-Clone/' target = '_blank'>
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>

                            <a href='https://github.com/muhammadhamza14210/Tesla-Clone' target = '_blank'>
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


                <div style = {{backgroundImage: `url(${Weather})`}}
                className = 'shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div'>
                    {/*Hover Effect */}
                    <div className = 'opacity-0 group-hover:opacity-100'>
                        <span className = 'text-2xl font-bold text-white tracking-wider'> 
                        Weather Application
                        </span>
                        

                        <div className = 'pt-8 text-center'>
                            <a href='https://muhammadhamza14210.github.io/Weather-Application/' target = '_blank'>
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>

                            <a href='https://github.com/muhammadhamza14210/Weather-Application' target = '_blank'>
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


                <div style = {{backgroundImage: `url(${Meta})`}}
                className = 'shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div'>
                    {/*Hover Effect */}
                    <div className = 'opacity-0 group-hover:opacity-100'>
                        <span className = 'text-2xl font-bold text-white tracking-wider'> 
                        Weather Application
                        </span>
                        

                        <div className = 'pt-8 text-center'>
                            <a href='https://github.com/muhammadhamza14210/Meta-Messenger-2.0' target = '_blank'>
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>

                            <a href='https://github.com/muhammadhamza14210/Meta-Messenger-2.0' target = '_blank'>
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work