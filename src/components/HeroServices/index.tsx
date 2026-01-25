import {
  WrapperHeroSection,
  ContentWrapper,
  TitleWrapper,
  SubTitleWrapper,
  ParagraphWrapper,
  ParagraphBolder,
} from './styles.ts';

export const HeroServices = () => {
  return (
    <WrapperHeroSection>
      <ContentWrapper>
        <TitleWrapper>Especialistas em</TitleWrapper>
        <SubTitleWrapper>Resolver Problemas</SubTitleWrapper>
        <ParagraphWrapper>
          Entendemos seu desafio, analisamos o cenário e entregamos a solução{' '}
          <ParagraphBolder>certa.</ParagraphBolder>
        </ParagraphWrapper>
        <ParagraphWrapper>
          Nada de fórmulas prontas: usamos nossa experiência para desenvolver
          projetos sob medida, focados em performance, escalabilidade e
          resultado real para o seu negócio.
        </ParagraphWrapper>
      </ContentWrapper>
    </WrapperHeroSection>
  );
};
