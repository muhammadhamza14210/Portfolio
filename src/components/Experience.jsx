import React from 'react'

const Experience = () => {
  return (
    <div name ='experience' className = 'w-full md:h-screen bg-[#0a192f] text-gray-300'>

        <div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className = 'pb-8'>
                <p className = 'text-4xl font-bold inline border-b-4 border-red-400'>Experience</p>
            </div>

            <div className='shadow-lg shadow-[#040c16] rounded-[10px] p-3 '>
                <h1 className='pb-1 font-bold text-xl'>Risk Analyst Intern</h1>
                <p className='text-sm italic pb-1'>May 2022 - August 2022</p>
                  <ul className='p-4 list-disc'>
                  <li>Creating <b>VAR</b> Sheets using <b>Excel</b> in order to have <b>VAR</b> be implemented the first time.</li>
                  <li>Demonstrated expertise in preparing daily reports, including (PnL) analysis, improved <b>20%</b> efficiency.</li>
                  <li>Provided support to the Risk Department by executing assigned daily tasks.</li>
                  <li>Skilled in managing trade books, including Petrochemicals, Gasoil, Dry Commodities, Bunkering Derivatives on <b>Aspect</b>.</li>
                  <li>Assisted the team with creating trades for testing purposes to transfer data from <b>Aspect</b> and <b>Oracle</b> to <b>Microsoft 365</b>.</li>
                  </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience