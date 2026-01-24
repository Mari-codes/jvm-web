export interface ServiceCardProps {
  icon: string;
  title: string;
  widthSize?: ButtonSize;
  heightSize?: ButtonSize;
  onClick?: () => void;
}

export type ButtonSize = "sm" | "md";