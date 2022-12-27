import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';


const Navbar = () => {

    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt = "Logo" style={{width:'50px'}} />
        </div>
       
        {/*Menu*/}

        <ul className='hidden md:flex cursor-pointer'>
            <li><Link to="home" spy={true} smooth={true}  duration={500}>Home</Link></li>
            <li><Link to="about" spy={true} smooth={true}  duration={500}>About</Link></li>
            <li><Link to="skills" spy={true} smooth={true}  duration={500}>Skills</Link></li>
            <li><Link to="work" spy={true} smooth={true}  duration={500}>Projects</Link></li>
            <li><Link to="contact" spy={true} smooth={true}  duration={500}>Contact</Link></li>
        </ul>

        {/*Hamburger*/}
            <div onClick = {handleClick} className='md:hidden absolute right-[30px] z-10 text-[20px] cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes/ >}
            </div>

            {/*Mobile Menu*/}
            <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center cursor-pointer'}>
                <li className = "py-6 text-3xl"><Link onClick ={handleClick} to="home" spy={true} smooth={true}  duration={500}>Home</Link></li>
                <li className = "py-6 text-3xl"><Link onClick ={handleClick} to="about" spy={true} smooth={true}  duration={500}>About</Link></li>
                <li className = "py-6 text-3xl"><Link onClick ={handleClick} to="skills" spy={true} smooth={true}  duration={500}>Skills</Link></li>
                <li className = "py-6 text-3xl"><Link onClick ={handleClick} to="work" spy={true} smooth={true}  duration={500}>Projects</Link></li>
                <li className = "py-6 text-3xl"><Link onClick ={handleClick} to="contact" spy={true} smooth={true}  duration={500}>Contact</Link></li>
            </ul>


        {/*Social Icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className = 'flex justify-between items-center w-full text-grey-300' href='https://www.linkedin.com/in/muhammad-hamza-4578211ab/' target='_blank' rel='noreferrer'>
                            LinkedIn <FaLinkedin size={30}/></a>
                    </li>
                </ul>

                <ul>
                    <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
                        <a className = 'flex justify-between items-center w-full text-grey-300' href='mailto:muhammadhamza14210@gmail.com' target='_blank' rel='noreferrer'>
                            Email <HiOutlineMail size={30}/></a>
                    </li>
                </ul>

                <ul>
                    <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                        <a className = 'flex justify-between items-center w-full text-grey-300' href='https://github.com/muhammadhamza14210' target='_blank' rel='noreferrer'>
                            Github <FaGithub size={30}/></a>
                    </li>
                </ul>

                <ul>
                    <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                        <a className = 'flex justify-between items-center w-full text-grey-300' href='https://drive.google.com/file/d/1wrxZSyAF94oBmOXIMPhZhf_enisNDNar/view?usp=share_link' target='_blank' rel='noreferrer'>
                            Resume <BsFillPersonLinesFill size={30}/></a>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Navbar