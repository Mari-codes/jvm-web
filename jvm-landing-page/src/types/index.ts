export interface CircleBackgroundProps {
  backgroundColor?: string;
  backgroundImage?: string;
  size?: number; // Size of the circle in pixels
}

export interface ServiceSectionProps {
  title: string;
  description: string;
  circleProps?: CircleBackgroundProps;
}