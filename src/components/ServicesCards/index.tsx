import { CardWrapper, ButtonWrapper, IconWrapper, CardTitle } from './style';
import type { ServiceCardProps } from './interface';
import { Icon } from '@iconify/react';

export const ServiceCard = ({
  icon,
  title,
  onClick,
  widthSize = 'sm',
  heightSize = 'sm',
  top,
  right,
  bottom,
  left,
}: ServiceCardProps) => {
  return (
    <>
      <ButtonWrapper onClick={onClick}>Clique para saber mais</ButtonWrapper>
      //tirar esse texto/botao daqui, pois nao e parte desse componente. Aqui fica o
      componente do card, nao tem texto. O texto a gente coloca quando for montar a secao toda com os 4 cards.

      <CardWrapper top={top} right={right} bottom={bottom} left={left}>
        <IconWrapper $widthSize={widthSize} $heightSize={heightSize}>
          <Icon icon={icon} />
        </IconWrapper>
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    </>
  );
};


  // Assim que ficam os cards, caso queira testar no app antes
  // <ServiceCard top left icon={''} title={''} />
  // <ServiceCard top right  icon={''} title={''} />
  // <ServiceCard bottom left icon={''} title={''} />
  // <ServiceCard bottom right icon={''} title={''} />