import React, { useEffect } from 'react'
import { motion } from 'motion/react';
const Loader = ({ setloader }) => {

    useEffect(() => {

        const timer = setTimeout(() => {
            setloader(false);
        }, 2000)

        return () => clearTimeout(timer)


    }, [setloader]);


    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex gap-[0.3rem]'>
                <motion.div
                    animate={{
                        scale: [1, 0.5, 1],
                        y: [0, 0.3, 0],
                        opacity: [0, 0.5, 1]
                    }}

                    transition={{
                        delay: 0,
                        duration: 0.8,
                        ease: 'linear',
                        repeat: Infinity
                    }}
                    className="circle"></motion.div>
                <motion.div
                    animate={{
                        scale: [1, 0.5, 1],
                        y: [0, 0.3, 0],
                        opacity: [0, 0.5, 1]
                    }}

                    transition={{
                        delay: 0.1,
                        duration:0.8,
                        ease: 'linear',
                        repeat: Infinity
                    }}

                    className="circle"></motion.div>
                <motion.div
                    animate={{
                        scale: [1, 0.5, 1],
                        y: [0, 0.3, 0],
                        opacity: [0, 0.5, 1]
                    }}

                    transition={{
                        delay: 0.2,
                        duration: 0.8,
                        ease: 'linear',
                        repeat: Infinity
                    }}

                    className="circle"></motion.div>
            </div>
        </div>
    )
}

export default Loader