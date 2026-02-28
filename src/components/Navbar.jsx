import React from "react";
import Logo from "../assets/Rubaru.webp"
const Navbar=()=>{

return <>
 <nav className='flex items-center justify-between '>
      <img src={Logo} loading="lazy"
        className='w-16 h-16 object-cover ' />

         <a href="mailto:rubarueventsentertainment@gmail.com" target="_blank" className="hidden md:flex md:items-center"><i className="ri-mail-line md:text-base text-[#EA4335] mr-2"></i><span> rubarueventsentertainment@gmail.com</span></a>

      <button className='px-3 py-2 rounded-md  bg-[#D4AF37] '><a href='tel:+916264065484'>Contact us </a></button>


    </nav>
    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
</>

}

export default Navbar;