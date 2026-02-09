import styled from 'styled-components';
import image from '../../assets/img/image.png';
import { Icon } from '@iconify/react';

export const Wrapper = styled.section`
  position: relative;
  height: 704px;
  margin: 0 135px 64px;
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

  @media (max-width: 1340px) {
    margin: 0px 110px 54px;
  }

  @media (max-width: 1220px) {
    margin: 0px 90px 54px;
  }

  @media (max-width: 1154px) {
    margin: 0px 40px 40px;
  }

  @media (max-width: 920px) {
    padding: 40px;
  }

  @media (max-width: 480px) {
    margin: 30px 20px;
    padding: 30px;
  }
`;

export const Content = styled.div`
  max-width: 720px;
  width: 100%;
  color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Subtitle = styled.span`
  font-size: clamp(32px, 5vw, 48px);
  line-height: 57px;
  font-weight: 200;
  display: block;
`;

export const Title = styled.h2`
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  line-height: 57px;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const Description = styled.p`
  max-width: 700px;
  font-size: clamp(14px, 2.5vw, 18px);
  line-height: 26px;
  opacity: 0.95;
`;

export const Actions = styled.nav`
  display: flex;
  gap: 16px;
  margin-top: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

interface ButtonProps {
  $variant?: 'primary' | 'secondary';
}

export const ActionButton = styled.button<ButtonProps>`
  padding: 12px 30px;
  border-radius: 30px;
  border: none;

  font-size: clamp(12px, 2vw, 14px);
  line-height: 19px;
  font-weight: 500;

  cursor: pointer;
  transition: all 0.25s ease;
  width: max-content;

  ${({ $variant }) =>
    $variant === 'primary' &&
    `
      background: linear-gradient(90deg, #004688, #459def);
      color: #fff;

      &:hover {
        filter: brightness(1.2);
      }
  `}

  ${({ $variant }) =>
    $variant === 'secondary' &&
    `
      background: linear-gradient(90deg, #4facfe, #00f2fe);
      color: #fff;
      backdrop-filter: blur(6px);

      &:hover {
        filter: brightness(1.2);
      }
  `}

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Rating = styled.figure`
  margin-top: 32px;
  text-align: center;
`;

export const Stars = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 8px;
`;

export const Star = styled(Icon)`
  font-size: 18px;
  width: 24px;
  color: #ffcc01;
`;

export const Caption = styled.figcaption`
  text-align: center;
`;

export const CaptionTitle = styled.strong`
  display: block;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 700;
  line-height: 21px;
`;

export const CaptionSubtitle = styled.span`
  font-size: clamp(12px, 1.8vw, 14px);
  opacity: 0.85;
  line-height: 21px;
`;
