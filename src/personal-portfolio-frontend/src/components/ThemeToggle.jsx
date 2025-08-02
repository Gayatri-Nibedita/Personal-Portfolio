import React from 'react';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="theme-toggle-container"
    >
      <Button
        variant="outline-secondary"
        onClick={toggleTheme}
        className="theme-toggle-btn"
        size="sm"
      >
        <motion.i
          className={isDark ? 'fas fa-sun' : 'fas fa-moon'}
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <span className="ms-2 d-none d-md-inline">
          {isDark ? 'Light' : 'Dark'}
        </span>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;