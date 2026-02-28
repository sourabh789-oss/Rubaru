import React from "react";
import { motion } from "motion/react";

const Buttons=({content,iconContent,link})=>{

return <motion.button
 initial={{opacity:0,y:40}}
         whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
         transition={{duration:0.8,ease:"easeOut"}}
className='bg-white/10 px-3 py-2 mt-4 backdrop-blur-3xl shadow-2xl font-bold rounded-3xl border border-[#D4AF37]/30'><a target="_blank" href={`${link}`}><span className='pr-4'><i className={`${iconContent}`}></i></span>{content}</a></motion.button>


}

export default Buttons;