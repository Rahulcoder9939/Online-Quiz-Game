import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Timer = ({ timeLeft, setTimeLeft, onTimeUp }) => {
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timerId);
        } else {
            onTimeUp();
        }
    }, [timeLeft, setTimeLeft, onTimeUp]);

    return (
        <motion.div
            className="timer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2>{timeLeft} seconds left</h2>
        </motion.div>
    );
};

export default Timer;