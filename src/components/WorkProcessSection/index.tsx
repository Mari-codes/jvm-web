import {
  ProcessContainer,
  Image,
  Content,
  IconList,
  Title,
  Span,
  TopIcon,
  TopIconWrapper,
} from './styles';
import iphone from '../../assets/img/iPhone.png';
import { IconWithLabel } from '../IconWithLabel';

export const WorkProcessSection = () => {
  return (
    <ProcessContainer>
      <Image src={iphone} />
      <Content>
        <TopIconWrapper>
          <TopIcon icon="mdi:account-multiple" />
        </TopIconWrapper>
        <Title>
          Nosso Processo de <Span>Trabalho</Span>
        </Title>
        <IconList>
          <IconWithLabel
            iconName="octicon:goal-16"
            text="Diagnóstico profundo e definição da solução ideal."
          />
          <IconWithLabel
            iconName="streamline-sharp:browser-build-remix"
            text="Prototipação, UX e validação com o cliente."
          />
          <IconWithLabel
            iconName="rivet-icons:device-solid"
            text="Desenvolvimento, testes e entrega com qualidade."
          />
        </IconList>
      </Content>
    </ProcessContainer>
  );
};
