import styled from 'styled-components';
import type { LogoProps } from './interface';

export const BackWrapper = styled.div`
  width: 100%;
  height: 120px;
  background-color: #004688;
  display: flex;
  margin-top: 20px;
  justify-content: center;

  @media (max-width: 480px) {
    height: 80px;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 20px;

  @media (max-width: 480px) {
    padding: 0px 10px;
    gap: 10px;
  }
`;

export const Logo = styled.img<LogoProps>`
  width: ${({ $w }) => $w}px;
  height: ${({ $h }) => $h}px;
  object-fit: contain;

  @media (max-width: 970px) {
    width: ${({ $w }) => $w * 0.9}px;
    height: auto;
  }

  @media (max-width: 768px) {
    width: ${({ $w }) => $w * 0.8}px;
    height: auto;
  }

  @media (max-width: 480px) {
    width: ${({ $w }) => $w * 0.6}px;
    height: auto;
  }

  @media (max-width: 380px) {
    width: ${({ $w }) => $w * 0.5}px;
    height: auto;
  }
`;
