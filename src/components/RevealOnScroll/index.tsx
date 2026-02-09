import { motion, type Variants, easeOut } from 'framer-motion';
import type { RevealOnScrollProps } from './interface';

export const RevealOnScroll = ({
  children,
  direction = 'up',
}: RevealOnScrollProps) => {
  const initialPosition = {
    up: { opacity: 0, y: 20 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
  };

  const variants: Variants = {
    hidden: initialPosition[direction],
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
};
