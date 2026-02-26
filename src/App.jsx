import React from 'react'
import Navbar from './components/Navbar';
const App = () => {
  return <div className=" px-3 pt-1 md:px-7  min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-zinc-900 to-slate-800 text-white font-bold">
    {/* <nav className='flex items-center justify-between'>
      <img src={Logo} loading="lazy"
        className='w-16 h-16 object-cover ' />

         <span className='hidden md:inline-block'> rubarueventsentertainment@gmail.com</span>

      <a href='tel:+916264065484'><button className='px-3 py-2 rounded-md  bg-[#D4AF37] '>Contact us</button></a>


    </nav>
    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div> */}
    <Navbar/>
  </div>
}

export default App;