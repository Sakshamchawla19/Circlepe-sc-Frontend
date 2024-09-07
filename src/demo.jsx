import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './section/main';
import Step1 from './section/step1';
import Step1_1 from './section/step1_1';
import Step2 from './section/step2';
import Step3 from './section/step3';
import Step4 from './section/step4';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const controls = useAnimation();

  const pages = [
    <Main />,
    <Step1 />,
    <Step1_1/>,
    <Step2 />,
    <Step3 />,
    <Step4 />
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        transition: { duration: 0.5 }
      }).then(() => {
        // Cycle to the next page
        setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
        controls.start({
          opacity: 1,
          transition: { duration: 0.5 }
        });
      });
    }, 3000); // Change page every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [controls, pages.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }} // Start fully visible
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {pages[currentPage]}
    </motion.div>
  );
}

export default App;
