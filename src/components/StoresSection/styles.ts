import { Icon } from '@iconify/react';
import styled from 'styled-components';

export const StoresContainer = styled.section`
  position: relative;
  height: calc(640px * 0.8);
  background-color: #ffffff;
  padding: 0px 135px 80px;
  display: flex;
  align-items: flex-end;

  @media (max-width: 1340px) {
    padding: 0px 110px 70px;
  }

  @media (max-width: 1220px) {
    padding: 0px 90px 70px;
  }

  @media (max-width: 1154px) {
    padding: 0px 40px 50px;
  }

  @media (max-width: 480px) {
    padding: 0px 20px 30px;
  }

  @media (max-width: 950px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 450px;
  height: 700px;
  position: absolute;
  top: -135px;
  right: 65px;

  @media (max-width: 1340px) {
    right: 45px;
    width: 400px;
    height: 622px;
  }

  @media (max-width: 1220px) {
    right: 25px;
    top: -75px;
  }

  @media (max-width: 1154px) {
    right: 0;
    top: -55px;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 950px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const TopIconWrapper = styled.div`
  background: linear-gradient(135deg, #ffd6d2, #feada6);
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 42px;
`;

export const TopIcon = styled(Icon)`
  width: 34px;
  height: 34px;
  color: #ffffff;
`;

export const Title = styled.div`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 300;
`;
export const Span = styled.span`
  font-weight: 500;
  font-size: clamp(28px, 5vw, 48px);
  display: inline-block;
  margin-bottom: 42px;
`;

export const StoresDescription = styled.div`
  color: #939fa4;
  font-size: 18px;
  width: 570px;

  @media (max-width: 1340px) {
    width: 470px;
  }

  @media (max-width: 1220px) {
    width: 400px;
  }

  @media (max-width: 1154px) {
    width: 350px;
  }
`;
