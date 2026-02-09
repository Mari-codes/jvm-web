import { RevealOnScroll } from '../RevealOnScroll';
import { TextSection, Text } from './styles';

function Info() {
  return (
    <RevealOnScroll>
      <TextSection>
        <Text>
          A APT 1006 é uma imobiliária especializada em imóveis de leilão da
          Caixa Econômica Federal. Para escalar o negócio, automatizar processos
          e centralizar suas operações, desenvolvemos um CRM completo.
        </Text>
        <Text>
          A JVM foi responsável por todo o ecossistema tecnológico: da automação
          à experiência final do usuário.
        </Text>
      </TextSection>
    </RevealOnScroll>
  );
}

export default Info;
