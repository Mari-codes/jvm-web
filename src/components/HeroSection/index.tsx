import { Wrapper, Content, Actions, Rating, Header } from './styles';

export const HeroSection = () => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <span>Nosso time</span>
          <h1>JVM Launchpad</h1>
        </Header>


        <p>
          Na JVM, investimos em pessoas, processos e aprendizado constante. Por
          meio do JVM Launchpad, capacitamos desenvolvedores e designers para
          atuar em projetos reais, sempre guiados por especialistas e orientados
          a resultados para nossos clientes.
        </p>

        <Actions>
          <button className="primary">Entrar em contato</button>
          <button className="secondary">Conhecer o Launchpad</button>
        </Actions>

        <Rating>
          <div className="stars">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>

          <figcaption>
            <strong>Serviço eficiente e filantrópico</strong>
            <span>Totalmente completo</span>
          </figcaption>
        </Rating>
      </Content>
    </Wrapper>
  );
};
