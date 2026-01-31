
import { Icon } from "@iconify/react";
import { SectionWrapper, ServiceCard, Title, Description, StyledCircle } from "./styles";

export function ServiceSection() {
  return (
    <SectionWrapper>
      <ServiceCard>
        <StyledCircle $bg="linear-gradient(180deg, #004688 0%, #242830 100%)">
          <Icon icon="f7:person-2-fill" color="#fff" width={30} height={30} />
        </StyledCircle>
        <Title>Assessoria em TI</Title>
        <Description>
          Apoiamos sua empresa na tomada de decisões tecnológicas, arquitetura de sistemas, segurança, automação e escalabilidade, garantindo que a tecnologia trabalhe a favor do crescimento do seu negócio.
        </Description>
      </ServiceCard>
      <ServiceCard>
        <StyledCircle $secondary>
          <Icon icon="ri:chat-smile-2-fill" color="#939FA4" width={35} height={35} />
        </StyledCircle>
        <Title>Google & SEO Estratégico</Title>
        <Description>
          Otimizamos seu site para conquistar melhores posições no Google, aumentar sua visibilidade e atrair clientes qualificados de forma orgânica, usando técnicas modernas de SEO e análise contínua de performance.
        </Description>
      </ServiceCard>
      <ServiceCard>
        <StyledCircle $secondary>
          <Icon icon="weui:tv-filled" color="#939FA4" width={30} height={30} />
        </StyledCircle>
        <Title>Desenvolvimento & UX</Title>
        <Description>
          Criamos sistemas, sites e aplicativos com foco em performance, usabilidade e conversão, unindo engenharia de software e design UX para entregar soluções eficientes e centradas no usuário.
        </Description>
      </ServiceCard>
    </SectionWrapper>
  );
}