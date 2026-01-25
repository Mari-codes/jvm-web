export interface ServiceCardProps {
  icon: string;
  title: string;
  widthSize?: ButtonSize;
  heightSize?: ButtonSize;
  onClick?: () => void;

  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
}

export type ButtonSize = 'sm' | 'md';
