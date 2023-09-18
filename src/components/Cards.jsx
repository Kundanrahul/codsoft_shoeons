import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import { motion, useAnimation } from 'framer-motion';
import  { useState, useEffect, useRef } from 'react';

const Cards = () => {
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
    ref={sectionRef}
     className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl   bg-gray-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem]' src={Single} alt="/" />
              <h2 className='text-xl font-bold text-center py-8' style={{fontFamily:'-moz-initial',textTransform:'uppercase'}}>platinum</h2>
              <p className='text-center text-4xl font-bold'>₹149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>2 Day delivery</p>
                  <p className='py-2 border-b mx-8'>15% off on sales</p>
                  <p className='py-2 border-b mx-8'>Extra benefits</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-300 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8' style={{fontFamily:'-moz-initial',textTransform:'uppercase'}}>silver</h2>
              <p className='text-center text-4xl font-bold'>₹549</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>1 Day delivery</p>
                  <p className='py-2 border-b mx-8'>25% off on sales</p>
                  <p className='py-2 border-b mx-8'>Extra Benefits</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex   bg-gray-300 flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-gray-300' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8' style={{fontFamily:'-moz-initial',textTransform:'uppercase'}}>gold</h2>
              <p className='text-center text-4xl font-bold'>₹799</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Same Day delivery</p>
                  <p className='py-2 border-b mx-8'>35% off on sales</p>
                  <p className='py-2 border-b mx-8'>Extra Benefits</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </motion.div>
  );
};
export default Cards;
