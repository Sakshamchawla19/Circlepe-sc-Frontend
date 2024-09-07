import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../App.css'
import Phone1 from '../assets/phone1.jpg';
import Phone4 from '../assets/phone4.jpg';
import Phone5 from '../assets/phone5.jpg';
import Phone6 from '../assets/phone6.jpg';

function Phone_small() {
    const controls = useAnimation();
    const [currentImage, setCurrentImage] = useState(0);

    const images = [Phone1,Phone1,Phone1,Phone4,Phone5,Phone6,];

    useEffect(() => {
        const sequence = async () => {
            setCurrentImage(0);
            await controls.start({x:'30%', y: '10%', scale: 1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000));

            setCurrentImage(1);
            await controls.start({ y: '15%', scale: 1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000));

            setCurrentImage(2);
            await controls.start({ y: '60%', scale: 1.6, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000)); 

            setCurrentImage(3);
            await controls.start({ y: '15%', scale: 1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000));

            setCurrentImage(4);
            await controls.start({ y: '15%', scale: 1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 4000));

            setCurrentImage(5);
            await controls.start({ y: '15%', scale: 1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 4000)); 

            setCurrentImage(0);
            await controls.start({ y: '10%', scale: 1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000)); 

        };

        sequence();
        const interval = setInterval(sequence, 24000);

        return () => clearInterval(interval);
    }, [controls]);

  return (
    <div className="container no_back">
        <motion.img src={images[currentImage]} alt="phone" className="phone_small" animate={controls}/>
    </div>
  );
}

export default Phone_small;
