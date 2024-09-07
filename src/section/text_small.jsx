import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Text1 from '../components/Text/text1.jsx';
import Text2 from '../components/Text/text2.jsx';
import Text3 from '../components/Text/text3.jsx';
import Text4 from '../components/Text/text4.jsx';
import Text5 from '../components/Text/text5.jsx';
import Text6 from '../components/Text/text6.jsx';
import '../App.css';

function Text_small() {
    const controls = useAnimation();
    const [currentText, setCurrentText] = useState(0);

    const textComponents = [<Text1 />,<Text2 />,<Text3 />,<Text4 />,<Text5 />,<Text6 />,];

    useEffect(() => {
        const sequence = async () => {
            setCurrentText(0);
            await controls.start({ opacity: 1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3200));

            setCurrentText(1);
            await controls.start({x:'0%',y:'0%', opacity: 0.9, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000));

            setCurrentText(2);
            await controls.start({ opacity: 1,scale:1.1,x:'20px', transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000)); 

            setCurrentText(3);
            await controls.start({ opacity: 1,scale:0.8,x:'0', transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000));

            setCurrentText(4);
            await controls.start({y:'30%',x:'20px', opacity: 1,scale:1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000));

            setCurrentText(5);
            await controls.start({y:'10%' ,x:'0',opacity: 1,scale:0.9, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000)); 

            setCurrentText(0);
            await controls.start({ opacity: 1,scale:1, transition: { duration: 1 } });
            await new Promise(resolve => setTimeout(resolve, 3000)); 
        };

        sequence();
        const interval = setInterval(sequence, 24500);

        return () => clearInterval(interval);
    }, [controls]);

    return (
        <div className="text-container_small">
            <motion.div
                className="animated-text"
                animate={controls}
            >
                {textComponents[currentText]}
            </motion.div>
        </div>
    );
}

export default Text_small;
