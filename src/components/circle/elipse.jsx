import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './circle.css';

function Circle() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ y: '-200px', transition: { duration: 1 } });
      await new Promise(resolve => setTimeout(resolve, 4000));

      await controls.start({ y: '-100px', transition: { duration: 1 } });
      await new Promise(resolve => setTimeout(resolve, 3000));

      await controls.start({ y: '-100px', transition: { duration: 1 } });
      await new Promise(resolve => setTimeout(resolve, 3000));

      await controls.start({ y: '0px', transition: { duration: 1 } });
      await new Promise(resolve => setTimeout(resolve, 3000));

      await controls.start({ y: '100px', transition: { duration: 1 } });
      await new Promise(resolve => setTimeout(resolve, 3000));

      await controls.start({ y: '200px', transition: { duration: 1 } });
      await new Promise(resolve => setTimeout(resolve, 3000));

      await controls.start({ y: '-200px', transition: { duration: 1 } });
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    sequence();
    const interval = setInterval(sequence, 24000);
    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="container m-0 p-0">
      <motion.div className="circle" animate={controls} />
    </div>
  );
}

export default Circle;
