import React from 'react';
import { motion } from 'motion/react';

const Intro = () => {

    return <motion.div className='intro relative top-8  font-thin'>
        <motion.p
            initial={{ x: -90, opacity: 0 ,scale:1.2}}

            whileInView={{
                x: 0, opacity: 1,scale:1
            }}
            viewport={{ once: true }}

            transition={{ duration: 0.8, ease: "easeOut" }}
            className='font-thin text-2xl md:text-4xl md:w-[30rem]'><span className='text-[#D4AF37]  text-[1.6rem] md:text-5xl'>Rubaru</span>– Where Every Event Becomes an Experience.</motion.p>

        <motion.section 
        initial={{ x: 90, opacity: 0,scale:1.2 }}

            whileInView={{
                x: 0, opacity: 1,scale:1
            }}
            viewport={{ once: true }}

            transition={{ duration: 0.8, ease: "easeOut" }}
        
        className='font-light my-3 md:text-2xl  -tracking-tighter'>
            Rubaru is a premium event platform bringing unforgettable DJ nights, electrifying club parties, and high-energy live performances together in one place. </motion.section>

        <motion.button
         initial={{x:-70,opacity:0}}

            whileInView={{
                x: 0, opacity: 1
            }}
            viewport={{ once: true }}

            transition={{ duration: 0.8, ease: "easeOut" }}
        className='bg-white/10  px-3 py-2 mt-4 backdrop-blur-3xl shadow-lg rounded-2xl border border-white/20 font-bold text-[#D4AF37] md:px-4 md:text-xl '>Connect With Us</motion.button>
    </motion.div>




}

export default Intro;