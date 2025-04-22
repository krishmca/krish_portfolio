import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiJqueryUiLogo } from "react-icons/di";
import { FaNodeJs } from 'react-icons/fa';
import { TfiHtml5 } from "react-icons/tfi";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "motion/react";

const iconVariants = (duration) => ({
    inital: {y: -10},
    animate: {
      y: [10, -10],
      transition: { duration: duration,
         ease: "linear",
         repeat: Infinity,
         repeatType: "reverse",
        },
    },
 });

const Technologies = () => {
  return (
    <motion.div 
    whileInView={{ opacity:1, y:0}}
    initial={{opacity:0, y: -100}}
    transition={{duration: 1.5}}
    className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <motion.div 
        whileInView={{ opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-7xl'/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJqueryUiLogo className='text-7xl text-yellow-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCss3 className='text-7xl text-sky-600'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TfiHtml5 className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-7xl text-sky-600'/>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Technologies