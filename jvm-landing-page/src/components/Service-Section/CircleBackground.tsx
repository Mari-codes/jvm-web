import React from 'react';

interface CircleBackgroundProps {
  backgroundColor?: string;
  backgroundImage?: string;
  size?: string;
}

const CircleBackground: React.FC<CircleBackgroundProps> = ({
  backgroundColor = 'lightblue',
  backgroundImage,
  size = '200px',
}) => {
  const circleStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return <div style={circleStyle}></div>;
};

export default CircleBackground;