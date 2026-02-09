import { Header } from '../Header';
import cellphone from '../../assets/img/celphone.png';
import {
  Description,
  HeaderContent,
  HeroHeaderWrapper,
  HeroHeaderWrapperButtons,
  HeroImage,
  LeftContent,
  Title,
} from './styles';
import { Anchor } from '../Anchor';
import { RevealOnScroll } from '../RevealOnScroll';

export const HeroHeader = () => {
  return (
    <HeroHeaderWrapper>
      <Header />
      <HeaderContent>
        <RevealOnScroll direction="left">
          <LeftContent>
            <Title>Sua solução WEB.</Title>
            <Description>
              Plataformas exclusivas, funcionais e de alto desempenho.
            </Description>
            <HeroHeaderWrapperButtons>
              <Anchor text="Portfólio" $variant="tertiary" />
              <Anchor text="Contato" $variant="quaternary" />
            </HeroHeaderWrapperButtons>
          </LeftContent>
        </RevealOnScroll>
        <RevealOnScroll direction="right">
          <HeroImage src={cellphone} alt="" />
        </RevealOnScroll>
      </HeaderContent>
    </HeroHeaderWrapper>
  );
};
