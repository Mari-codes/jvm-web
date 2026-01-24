import {
  Content,
  Image,
  Span,
  StoresContainer,
  StoresDescription,
  Title,
  TopIcon,
  TopIconWrapper,
} from './styles';
import iphoneUser from '../../assets/img/iphone-user.png';

export const StoresSection = () => {
  return (
    <StoresContainer>
      <Image src={iphoneUser} />
      <Content>
        <TopIconWrapper>
          <TopIcon icon="ri:chat-smile-2-line" />
        </TopIconWrapper>
        <Title>Lojas de</Title>
        <Span>Alto desempenho</Span>
        <StoresDescription>
          Sistema de pagamento completo para você aceitar cartão, pix, boleto,
          parcelamento tudo do jeito que seu cliente deseja pagar. Tudo
          automatizado, desde o publicação do produto até o envio do produto.
        </StoresDescription>
      </Content>
    </StoresContainer>
  );
};
