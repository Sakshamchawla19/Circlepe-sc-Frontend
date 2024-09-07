import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './phone.css';
import Phone1 from '../../assets/phone1.jpg';
import Phone3 from '../../assets/phone3.jpg';
import Phone4 from '../../assets/phone4.jpg';
import Phone5 from '../../assets/phone5.jpg';
import Phone6 from '../../assets/phone6.jpg';

function Phone() {
    const controls = useAnimation();
    const [currentImage, setCurrentImage] = useState(0);

    const images = [Phone1,Phone1,Phone3,Phone4,Phone5,Phone6,];

    useEffect(() => {
        const sequence = async () => {
            setCurrentImage(0);
            await controls.start({x:'30%', y: '0%', scale: 1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000));

            setCurrentImage(1);
            await controls.start({ y: '30%', scale: 1.2, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000));

            setCurrentImage(2);
            await controls.start({ y: '17%', scale: 1.2, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000)); 

            setCurrentImage(3);
            await controls.start({ y: '-20%', scale: 1.2, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000));

            setCurrentImage(4);
            await controls.start({ y: '0%', scale: 1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000));

            setCurrentImage(5);
            await controls.start({ y: '-5%', scale: 1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000)); 

            setCurrentImage(0);
            await controls.start({ y: '0%', scale: 1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000)); 

        };

        sequence();
        const interval = setInterval(sequence, 24000);

        return () => clearInterval(interval);
    }, [controls]);

  return (
    <div className="container">
        <motion.img src={images[currentImage]} alt="phone" className="phone" animate={controls}/>
    </div>
  );
}

export default Phone;
