import React from 'react';
import { motion } from 'framer-motion';

const ToastNotification = ({ message, type, onClose }) => {
    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <motion.div
            className={`toast-notification ${type}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
            onClick={onClose}
        >
            {message}
        </motion.div>
    );
};

export default ToastNotification;