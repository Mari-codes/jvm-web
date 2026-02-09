import { CardWrapper, IconWrapper, CardTitle } from './style';
import type { ServiceCardProps } from './interface';
import { Icon } from '@iconify/react';

export const ServiceCard = ({
  icon,
  title,
  widthSize = 'sm',
  heightSize = 'sm',
  top,
  right,
  bottom,
  left,
}: ServiceCardProps) => {
  return (
    <>
      <CardWrapper $top={top} $right={right} $bottom={bottom} $left={left}>
        <IconWrapper $widthSize={widthSize} $heightSize={heightSize}>
          <Icon icon={icon} />
        </IconWrapper>
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    </>
  );
};
