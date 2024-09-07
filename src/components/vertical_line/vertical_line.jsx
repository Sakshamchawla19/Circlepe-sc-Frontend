import './vertical_line.css';
import React, { useEffect, useState } from 'react';

function RangeSlider() {
    const [step, setStep] = useState(1);
    const totalSteps = 5;

    useEffect(() => {
        const runSequence = async () => {
            await new Promise(resolve => setTimeout(resolve, 4000));
            setStep(2);

            await new Promise(resolve => setTimeout(resolve, 5000));
            setStep(3);

            await new Promise(resolve => setTimeout(resolve, 6000));
            setStep(4);

            await new Promise(resolve => setTimeout(resolve, 7000));
            setStep(5);

            await new Promise(resolve => setTimeout(resolve, 8000));
            setStep(1);

            runSequence(); // Repeat the sequence
        };

        runSequence();

        return () => {};
    }, []);

    return (
        <div>
            <input
                type="range"
                className="form-range"
                id="customRange1"
                min="0"
                max="5"
                step="1"
                value={step}
                readOnly
                style={{
                    '--value': `${((step - 0) / totalSteps) * 100}%`,
                    '--color-start': '#6bafff', // Blue start color
                    '--color-end': '#46e04c',   // Green end color
                }}
            />
        </div>
    );
}

export default RangeSlider;
