import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './arrow.css';
import Arrow1 from '../../assets/18_1.png';
import Arrow2 from '../../assets/18_2.png';

function Arrow() {
    const controls = useAnimation();
    const [currentImage, setCurrentImage] = useState(0);

    const images = [Arrow1, Arrow2];

    useEffect(() => {
        const sequence = async () => {

            await controls.start({ opacity: 0, transition: { duration: 0 } });
            await new Promise(resolve => setTimeout(resolve, 3900)); 

            setCurrentImage(0);
            await controls.start({ opacity: 1, x: '40%', y: '0%', scale: 1.1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 2800));

            setCurrentImage(1);
            await controls.start({ x: '60%', y: '40%', scale: 1.2, transition: { duration: 1 }, rotate: -40 });
            await new Promise(resolve => setTimeout(resolve, 3000));

            await controls.start({ x: '44%', y: '47%', scale: 1.2, transition: { duration: 1 }, rotate: 15 });
            await new Promise(resolve => setTimeout(resolve, 3000));

            await controls.start({ x: '40%', y: '75%', scale: 1.2, transition: { duration: 1 }, rotate: 0 });
            await new Promise(resolve => setTimeout(resolve, 3000));

            await controls.start({ x: '40%', y: '70%', scale: 1.2, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000));

            await controls.start({ x: '40%', y: '0%', scale: 1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000));
        };

        sequence();
        const interval = setInterval(sequence, 23700);

        return () => clearInterval(interval);
    }, [controls]);

    return (
        <div className="container">
          <motion.img  src={images[currentImage]}  alt="arrow"  className={`arrow ${currentImage === 1 ? 'arrow2' : ''}`}  animate={controls} />
        </div>
    );
}

export default Arrow;
//saksham chawla