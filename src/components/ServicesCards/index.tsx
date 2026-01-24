import { CardWrapper, ButtonWrapper, IconWrapper, CardTitle } from "./style";
import type { ServiceCardProps } from "./interface";
import { Icon } from "@iconify/react";

export const ServiceCard = ({ icon, title, onClick, widthSize = "sm",
    heightSize = "sm", }: ServiceCardProps) => {
  return (
    <>

<ButtonWrapper onClick={onClick}>Clique para saber mais</ButtonWrapper>

    <CardWrapper>
        
      <IconWrapper $widthSize={widthSize} $heightSize={heightSize}>
        <Icon icon={icon} />
      </IconWrapper>

      <CardTitle>{title}</CardTitle>
    </CardWrapper>
    </>
  );
};
