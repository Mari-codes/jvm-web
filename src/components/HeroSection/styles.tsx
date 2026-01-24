import styled from 'styled-components';
import image from '../../assets/image.png';

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1170px;
  height: 704px;
  margin: 79px auto 0;
  padding: 0 1rem;

  background-image: url(${image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 5px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(45, 130, 200, 0.78),
      rgba(20, 70, 140, 0.88)
    );
    z-index: 1;
  }


  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 520px;
  }
`;

export const Content = styled.div`
  max-width: 720px;
  color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Header = styled.header`
  span {
    font-size: 48px;
    line-height:57px;
    font-weight: 200;

  }

  h1 {

    font-size: 48px;
    font-weight: 700;
    line-height: 57px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
    }
  }
`;

export const Description = styled.p`
  max-width: 700px;
  font-size: 18px;
  line-height: 26px;
  opacity: 0.95;

`;

export const Actions = styled.nav`
  display: flex;
  gap: 16px;
  margin-top: 8px;

  button {
    padding: 12px 30px;
    border-radius: 30px;
    border: none;
    font-size: 14px;
    line-height: 19px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .primary {
    background: linear-gradient(90deg, #004688, #459DEF);
    color: #fff;
  }

  .primary:hover {
    filter: brightness(1.2);
  }

  .secondary {
    background: linear-gradient(90deg, #4FACFE, #00F2FE);
    color: #fff;
    backdrop-filter: blur(6px);
  }

  .secondary:hover {
      filter: brightness(1.2);
  }

  @media (max-width: 400px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

export const Rating = styled.figure`
  margin-top: 32px;
  text-align: center;

  .stars {
    font-size: 18px;
    margin-bottom: 8px;
  }

  strong {
    display: block;
    font-size: 16px;
    font-weight: 700;
    line-height:21px;
  }

  span {
    font-size: 14px;
    opacity: 0.85;
    line-height:21px;
  }
`;
