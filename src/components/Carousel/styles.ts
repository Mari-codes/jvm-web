import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-236px * 7)); }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 60px 0;
  display: flex;
  background: transparent;
`;

export const Track = styled.div<{ $isPaused: boolean }>`
  display: flex;
  animation: ${scroll} 25s linear infinite; 
  animation-play-state: ${props => props.$isPaused ? 'paused' : 'running'};
  will-change: transform;
`;

export const Item = styled.div`
  min-width: 236px;
  height: 480px;
  padding: 0 10px;
  flex-shrink: 0;
`;

export const ImageContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 10px 40px rgba(0,0,0,0.06);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    user-select: none;
  }
`;