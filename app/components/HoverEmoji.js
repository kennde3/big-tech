import { useState } from 'react';
import { motion } from 'framer-motion';

const HoverEmoji = ({ children, emoji }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <>
          <motion.span
            className="shape"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {emoji}
          </motion.span>
          
          
        </>
      )}
    </div>
  );
};

export default HoverEmoji;
