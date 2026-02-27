import React from 'react'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import 'remixicon/fonts/remixicon.css'
import './index.css'
import Buttons from './components/Buttons';
const App = () => {
  return <div className=" px-3  pt-1 md:px-7  min-h-screen overflow-x-hidden  bg-gradient-to-br from-black via-zinc-900 to-slate-800 text-white font-bold">
    <Navbar />
    <Intro />

    <div className='relative top-20 pb-4  flex flex-col flex-wrap gap-3 justify-center'>
      <Buttons content={"Connect with Instragram"} iconContent={"ri-instagram-line text-pink-600"}/>
      <Buttons content={"Join Whatsapp Community"}
      iconContent={"ri-whatsapp-line text-green-600"}/>
      <Buttons content={"Connect On Sorts My Scene"} iconContent={"ri-ticket-2-line text-pink-600"}/>
       <Buttons content={"Message to Admin"}
      iconContent={"ri-whatsapp-line text-green-600"}/>

    </div>
  </div>
}

export default App;