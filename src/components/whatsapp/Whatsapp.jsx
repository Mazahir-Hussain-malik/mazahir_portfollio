import React from 'react';
import { motion } from "framer-motion";
import './whatsapp.css';

function WhatsApp() {
  const phoneNumber = "+923554297500"; 
  const message = encodeURIComponent("Hi, I'd like to connect!");

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      className="whatsapp-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="whatsapp-content">
        <div className="whatsapp-text">
          <h3 className="whatsapp-title">Connect on WhatsApp</h3>
          <p className="whatsapp-description">Get in touch instantly for quick responses!</p>
        </div>
        <motion.a
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          Chat Now
        </motion.a>
      </div>
      <motion.div
        className="whatsapp-icon-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="whatsapp-icon-wrapper">
          <motion.div
            className="whatsapp-icon-background"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <svg className="whatsapp-large-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WhatsApp;