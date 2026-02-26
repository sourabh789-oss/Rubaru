import React from "react";
import Logo from "../assets/Rubaru.webp"
const Navbar=()=>{

return <>
 <nav className='flex items-center justify-between'>
      <img src={Logo} loading="lazy"
        className='w-16 h-16 object-cover ' />

         <span className='hidden md:inline-block'> rubarueventsentertainment@gmail.com</span>

      <a href='tel:+916264065484'><button className='px-3 py-2 rounded-md  bg-[#D4AF37] '>Contact us</button></a>


    </nav>
    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
</>

}

export default Navbar;