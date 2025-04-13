import React from 'react';
import { motion } from 'framer-motion';

const QuestionCard = ({ question, options, onAnswer, selectedAnswer }) => {
    return (
        <div className="question-card">
            <h2 className="question">{question}</h2>
            <div className="options">
                {options.map((option, index) => (
                    <motion.button
                        key={index}
                        className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
                        onClick={() => onAnswer(option)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {option}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;