import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
};

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className, direction = 'up' }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      data-reveal=""
      initial={{ opacity: 0, scale: 0.985, y: direction === 'up' ? 32 : 0, x: direction === 'left' ? -28 : direction === 'right' ? 28 : 0 }}
      whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
