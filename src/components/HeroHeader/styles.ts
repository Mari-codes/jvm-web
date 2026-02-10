import styled from 'styled-components';

export const HeroHeaderWrapper = styled.div`
  background: linear-gradient(225deg, #004688, #09bbed);
  min-height: 100dvh;
  height: auto;
  padding: 40px 135px 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1340px) {
    padding: 30px 110px 30px;
  }

  @media (max-width: 1220px) {
    padding: 20px 90px 30px;
  }

  @media (max-width: 1154px) {
    padding: 14px 40px 30px;
  }

  @media (max-width: 480px) {
    padding: 14px 20px 30px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;

  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 56px;
    flex: none;
  }
`;

export const LeftContent = styled.div`
  color: #ffffff;
  max-width: 570px;
  width: 100%;

  @media (max-width: 950px) {
    text-align: center;
  }

  @media (max-width: 440px) {
    max-width: 300px;
  }
`;

export const Title = styled.h1`
  font-size: clamp(26px, 6vw, 96px);
  margin-bottom: 56px;

  @media (max-width: 950px) {
    margin-bottom: 30px;
  }
`;
export const Description = styled.p`
  font-size: clamp(16px, 2vw, 20px);
  margin-bottom: 52px;

  @media (max-width: 950px) {
    margin-bottom: 28px;
  }
`;
export const HeroHeaderWrapperButtons = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 950px) {
    gap: 18px;
    justify-content: center;
  }

  @media (max-width: 640px) {
    gap: 14px;
  }
`;

export const HeroImage = styled.img`
  display: flex;
  max-width: 502px;
  width: 100%;
  max-height: 556px;
  height: 100%;

  @media (max-width: 950px) {
    max-width: 480px;
  }

  @media (max-width: 640px) {
    max-width: 350px;
  }

  @media (max-width: 480px) {
    max-width: 330px;
  }

  @media (max-width: 380px) {
    max-width: 300px;
  }
`;
