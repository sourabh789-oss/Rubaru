import React from 'react';
import { motion } from 'motion/react';


const Footer = () => {

    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='relative mb-2 md:mb-0'> 
            <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-1"></div>
            <span className='font-thin text-xs md:text-base md:mx-auto'>If You have any queries? feel freely to mail or contact us</span>
            <motion.div className=' flex flex-col md:flex-row md:text-base mt-2  gap-2 justify-between items-center text-sm'>
                <a href="tel:9826763552" target="_blank">
                    <motion.strong
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className='text-white font-thin cursor-pointer'><i className="ri-phone-fill md:text-base pr-1 text-green-600"></i>9826763552</motion.strong>
                </a>

                <a href="mailto:rubarueventsentertainment@gmail.com" target="_blank">
                    <motion.strong
                        className='text-white font-thin cursor-pointer'><i className="ri-mail-line md:text-base text-red-300 pr-1"></i>rubarueventsentertainment@gmail.com</motion.strong>
                </a>
            </motion.div>
        </motion.footer>


    )




}

export default Footer;