import React from 'react'

const Experience = () => {
  return (
    <div name ='experience' className = 'w-full md:h-screen bg-[#0a192f] text-gray-300'>

        <div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className = 'pb-8'>
                <p className = 'text-4xl font-bold inline border-b-4 border-red-400'>Experience</p>
            </div>

            <div className='border-1 rounded-[10px] bg-gray-600 p-3 '>
                <h1 className='py-4 font-bold text-lg'>Risk Analyst Intern: <span className='text-sm italic'>May 2022 - August 2022</span></h1>
                <p>Creating VAR Sheets using Excel in order to have <b>VAR</b> be implemented the first time.</p>
                <p>Demonstrated expertise in preparing daily reports, including (PnL) analysis, improved <b>20%</b> efficiency.</p>
                <p>Provided support to the Risk Department by executing assigned daily tasks.</p>
                <p>Skilled in managing trade books, including Petrochemicals, Gasoil, Dry Commodities, Bunkering Derivatives on <b>Aspect</b>.</p>
                <p>Assisted the team with creating trades for testing purposes to transfer data from <b>Aspect</b> and <b>Oracle</b> to <b>Microsoft 365</b>.</p>
            </div>

        </div>
    </div>
  )
}

export default Experience