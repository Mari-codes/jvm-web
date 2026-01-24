import { CircleBackground } from "./CircleBackground";
import { Icon } from "@iconify/react";

const titleStyle: React.CSSProperties = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: 24,
  margin: "16px 0 8px 0",
  color: "#000",
};

const descStyle: React.CSSProperties = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: 16,
  margin: 0,
  color: "#939FA4",
};

export function ServiceSection() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", color: "#000" }}>
      <div style={{ textAlign: "center", maxWidth: 300 }}>
        <CircleBackground bg="linear-gradient(180deg, #004688 0%, #242830 100%)">
            <Icon icon="f7:person-2-fill" color="#fff" width={30} height={30} />
        </CircleBackground>
        <h3 style={titleStyle}>Assessoria em TI</h3>
        <p style={descStyle}>
          Apoiamos sua empresa na tomada de decisões tecnológicas, arquitetura de sistemas, segurança, automação e escalabilidade, garantindo que a tecnologia trabalhe a favor do crescimento do seu negócio.
        </p>
      </div>
      <div style={{ textAlign: "center", maxWidth: 300 }}>
        <CircleBackground secondary>
          <Icon icon="ri:chat-smile-2-fill" color="#939FA4" width={35} height={35} />
        </CircleBackground>
        <h3 style={titleStyle}>Google & SEO Estratégico</h3>
        <p style={descStyle}>
          Otimizamos seu site para conquistar melhores posições no Google, aumentar sua visibilidade e atrair clientes qualificados de forma orgânica, usando técnicas modernas de SEO e análise contínua de performance.
        </p>
      </div>
      <div style={{ textAlign: "center", maxWidth: 300 }}>
        <CircleBackground secondary>
          <Icon icon="weui:tv-filled" color="#939FA4" width={30} height={30} />
        </CircleBackground>
        <h3 style={titleStyle}>Desenvolvimento & UX</h3>
        <p style={descStyle}>
          Criamos sistemas, sites e aplicativos com foco em performance, usabilidade e conversão, unindo engenharia de software e design UX para entregar soluções eficientes e centradas no usuário.
        </p>
      </div>
    </div>
  );
}