import React from 'react'

const Contact = () => {
  return (
    <div name = 'contact' className = 'w-full h-screen flex justify-center items-center p-4 bg-[#0a192f]'>
        <form method = 'POST' action = 'https://getform.io/f/0b701b0a-9514-4b02-9db8-680da7559d02' className = 'flex flex-col max-w-[600px] w-full' >
            <div className = 'pb-8'>
                <p className = 'text-4xl font-bold inline border-b-4 border-red-400 text-gray-300'>Contact</p>
                <p className = 'text-gray-300 py-4'> Submit the form or email me directly to contact me!</p>
            </div>
            
            <input className = 'bg-[#ccd6f6] p-2' type = 'text' placeholder = 'Name' name = 'name'></input>
            <input className = 'bg-[#ccd6f6] my-4 p-2' type = 'email' placeholder = 'Email' name = 'email'></input>
            <textarea className = 'bg-[#ccd6f6] p-2' type = 'message' placeholder = 'Message' rows = '10'></textarea>

            <button className = 'text-white border-2 hover:border-red-500 hover:bg-red-500 duration-300 flex mx-auto px-4 py-3 my-8 justify-center items-center'>Lets Collaborate </button>
        </form>
    </div>
  )
}

export default Contact