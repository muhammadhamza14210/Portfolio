import React from 'react'

const Experience = () => {
  return (
    <div name ='experience' className = 'w-full md:h-screen bg-[#0a192f] text-gray-300'>

        <div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className = 'pb-8'>
                <p className = 'text-4xl font-bold inline border-b-4 border-red-400'>Experience</p>
            </div>

            <div className='shadow-lg shadow-[#040c16] rounded-[10px] p-3'>
                <h1 className='pb-1 font-bold text-xl'>Co-Founder</h1>
                <p className='text-sm italic pb-1'><span className='font-bold'>NotoDigitalChord :</span> Feb 2023 - Present</p>
                  <ul className='p-4 list-disc'>
                  <li>Scaling local business through digital marketing.</li>
                  <li>Use of <b>Google Ads, Facebook Ads, Google Analytics, Instagram Ads</b> to monitor progress and run our campaigns.</li>
                  </ul>
            </div>

          <div className='pb-10'></div>

            <div className='shadow-lg shadow-[#040c16] rounded-[10px] p-3 '>
                <h1 className='pb-1 font-bold text-xl'>Risk Analyst Intern</h1>
                <p className='text-sm italic pb-1'><span className='font-bold'>Al Ghurair Energy:</span> May 2022 - August 2022</p>
                  <ul className='p-4 list-disc'>
                  <li>Demonstrated expertise in preparing daily reports, including <b>P/L</b> and <b>VAR</b> analysis, improved <b>20%</b> efficiency.</li>
                  <li>Reviewing daily derivative positions to ascertain free equity and notifying leadership team regarding margin call requirements.</li>
                  <li>Skilled in managing trade books, including Petrochemicals, Gasoil, Dry Commodities, Bunkering Derivatives on <b>Aspect</b>.</li>
                  <li>Pricing and MTM valuation for Gasoil and Petrochemicals products.</li>
                  <li>Entering physical and derivative trades in trading software in <b>Aspect</b>.</li>
                  <li>Monitor positions and compare against limits, escalate limit breaches and get resolutions through collaboration.</li>
                  <li>Assisted the team with creating trades for testing purposes to transfer data from <b>Aspect</b> and <b>Oracle</b> to <b>Microsoft 365</b>.</li>
                  </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience