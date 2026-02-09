import { RevealOnScroll } from '../RevealOnScroll';
import {
  Wrapper,
  Content,
  Actions,
  Rating,
  Header,
  Subtitle,
  Title,
  Description,
  ActionButton,
  Caption,
  Star,
  Stars,
  CaptionSubtitle,
  CaptionTitle,
} from './styles';

export const HeroSection = () => {
  return (
    <RevealOnScroll direction="up">
      <Wrapper>
        <Content>
          <Header>
            <Subtitle>Nosso time</Subtitle>
            <Title>JVM Launchpad</Title>
          </Header>
          <Description>
            Na JVM, investimos em pessoas, processos e aprendizado constante.
            Por meio do JVM Launchpad, capacitamos desenvolvedores e designers
            para atuar em projetos reais, sempre guiados por especialistas e
            orientados a resultados para nossos clientes.
          </Description>
          <Actions>
            <ActionButton $variant="primary">Entrar em contato</ActionButton>
            <ActionButton $variant="secondary">
              Conhecer o Launchpad
            </ActionButton>
          </Actions>
          <Rating>
            <Stars aria-label="Avaliação: 5 de 5 estrelas">
              <Star icon="fa-solid:star" />
              <Star icon="fa-solid:star" />
              <Star icon="fa-solid:star" />
              <Star icon="fa-solid:star" />
              <Star icon="fa-solid:star" />
            </Stars>
            <Caption>
              <CaptionTitle>Serviço eficiente e filantrópico</CaptionTitle>
              <CaptionSubtitle>Totalmente completo</CaptionSubtitle>
            </Caption>
          </Rating>
        </Content>
      </Wrapper>
    </RevealOnScroll>
  );
};
