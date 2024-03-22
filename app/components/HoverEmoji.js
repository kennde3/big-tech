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
            className="absolute top-[-70px] left-[8em] border-[1px] p-[7px] bg-[#eceef2] rounded-full text-2xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
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
