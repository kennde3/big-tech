// components/AnimatedSVG.js

import styled, { keyframes } from 'styled-components';

// Define keyframes for animation
const move = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
`;

// Styled SVG component with animation
const AnimatedSVG = styled.svg`
  animation: ${move} 5s linear; /* Adjust animation duration and timing function as needed */
`;

export default AnimatedSVG;
