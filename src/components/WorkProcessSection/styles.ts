import { Icon } from '@iconify/react';
import styled from 'styled-components';

export const ProcessContainer = styled.section`
  background-color: #f4f6fd;
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 0px 135px 315px;

  @media (max-width: 1340px) {
    padding: 0px 110px 290px;
  }

  @media (max-width: 1220px) {
    padding: 0px 90px 250px;
  }

  @media (max-width: 1154px) {
    padding: 0px 40px 200px;
  }

  @media (max-width: 480px) {
    padding: 0px 20px 100px;
  }

  @media (max-width: 950px) {
    justify-content: center;
    padding: 70px 0;
  }
`;

export const Image = styled.img`
  width: 450px;
  height: 700px;
  position: absolute;
  top: -135px;
  left: 65px;

  @media (max-width: 1340px) {
    left: 45px;
    width: 400px;
    height: 622px;
  }

  @media (max-width: 1220px) {
    left: 25px;
  }

  @media (max-width: 1154px) {
    left: 0;
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
    align-items: center;
  }
`;

export const TopIconWrapper = styled.div`
  background: linear-gradient(135deg, #004688, #242830);
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 36px;
`;

export const TopIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  color: #ffffff;
`;

export const Title = styled.h3`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 300;
  width: 409px;
  margin-bottom: 41px;

  @media (max-width: 440px) {
    max-width: 300px;
  }
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const IconList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 41px;

  @media (max-width: 1340px) {
    gap: 35px;
  }

  @media (max-width: 1220px) {
    gap: 30px;
  }

  @media (max-width: 1154px) {
    gap: 20px;
  }
`;
