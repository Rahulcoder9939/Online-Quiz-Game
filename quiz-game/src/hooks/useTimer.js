import { useState, useEffect } from 'react';

const useTimer = (initialTime = 30) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timer;

        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }

        return () => clearInterval(timer);
    }, [isActive, timeLeft]);

    const startTimer = () => {
        setIsActive(true);
        setTimeLeft(initialTime);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(initialTime);
    };

    return { timeLeft, isActive, startTimer, stopTimer, resetTimer };
};

export default useTimer;