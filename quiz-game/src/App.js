import React, { useState, useEffect } from 'react';
import QuestionCard from './components/QuestionCard';
import Timer from './components/Timer';
import ToastNotification from './components/ToastNotification';
import { questions } from './utils/questions';
import { motion } from 'framer-motion';

const App = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
            setToastMessage('Correct!');
        } else {
            setToastMessage('Incorrect!');
        }
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
        nextQuestion();
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizCompleted(true);
        }
    };

    const startQuiz = () => {
        setIsQuizStarted(true);
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsQuizCompleted(false);
    };

    return (
        <div className="quiz-container">
            {isQuizStarted ? (
                <>
                    <Timer 
                        onTimeUp={() => {
                            setToastMessage('Time is up!');
                            setShowToast(true);
                            setTimeout(() => setShowToast(false), 2000);
                            nextQuestion();
                        }} 
                    />
                    {isQuizCompleted ? (
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                        >
                            <h2>Your final score is: {score}/{questions.length}</h2>
                        </motion.div>
                    ) : (
                        <QuestionCard 
                            question={questions[currentQuestionIndex]} 
                            onAnswer={handleAnswer} 
                        />
                    )}
                    {showToast && <ToastNotification message={toastMessage} />}
                </>
            ) : (
                <button onClick={startQuiz}>Start Quiz</button>
            )}
        </div>
    );
};

export default App;