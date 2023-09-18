
import React, { useState, useEffect, useRef } from 'react';
import shoeons from '../assets/shoeons.webp';
import jordan4s from '../assets/jordan4s.jpg';
import airjs from '../assets/airjs.jpg';
import { motion, useAnimation } from 'framer-motion';

const Analytics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(sectionTop < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [isVisible, controls]);

  return (
    
      <motion.div
        initial={{ opacity: 0, y: 100 }} 
        animate={controls}
        transition={{ duration: 1.0}} 
        className='w-full bg-white py-16 px-4'
        ref={sectionRef}
      >
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto imgtg' src={shoeons} alt='/' />
          <div className='flex flex-col justify-center'>
          <h1 className='md:text-2xl sm:text-2xl text-xl font-bold py-2'>JORDAN STAY LOYAL 3 </h1>
            <p className='text-[#0f0f0f] font-bold mx-2 '> ₹11,999</p>
            <p className='md:text-xl sm:text-xl  text-xl para' style={{ fontFamily: 'monospace, sans-serif' }}>
        Color (BLACK/CEMENT GREY)
      </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>BUY NOW</button>
          </div>
        </div>
      <motion.div
  className='w-full bg-white py-16 px-4'
>
  <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='w-[500px] mx-auto imgtg md:order-2' src={jordan4s} alt='/' />
    <div className='flex flex-col justify-center md:order-1'>
      <h1 className='md:text-2xl sm:text-2xl text-xl font-bold py-2'>AIR JORDAN 4</h1>
      <p className='text-[#0f0f0f] mx-2 font-bold'>₹11,999</p>
      <p className='md:text-xl sm:text-xl text-xl  para' style={{ fontFamily: 'monospace, sans-serif' }}>
        Color (BLACK/CEMENT GREY)
      </p>
      <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>BUY NOW</button>
    </div>
  </div>
</motion.div>

      <motion.div
        className='w-full bg-white py-16 px-4'
      >
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto imgtg' src={airjs} alt='/'style={{margin:'4px'}} />
          <div className='flex flex-col justify-center'>
          <h1 className='md:text-2xl sm:text-2xl text-xl font-bold py-2'>AIR RETRO 2</h1>
            <p className='text-[#0f0f0f] font-bold mx-2 '> ₹11,999</p>
            <p className='md:text-xl sm:text-xl text-xl para' style={{ fontFamily: 'monospace, sans-serif' }}>
        Color (BLACK/CEMENT GREY)
      </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>BUY NOW</button>
          </div>
        </div>
      </motion.div>
      </motion.div>
  );
};

export default Analytics;


