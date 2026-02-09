import styled from 'styled-components';
import caseSectionImage from '../../assets/img/case-section-image.png';
import caseSectionDotsImage from '../../assets/img/case-section-dots.png';

export const CaseSectionWrapper = styled.div`
  width: 100%;
  max-height: 858px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;

export const CaseSectionTitle = styled.div`
  text-align: center;
  color: #24282a;
  margin-bottom: 16px;

  h3 {
    font-size: clamp(18px, 4vw, 40px);
    font-weight: normal;
  }
  h1 {
    font-size: clamp(24px, 5vw, 40px);
    font-weight: bold;
  }
  p {
    color: #939fa4;
    font-size: clamp(12px, 2vw, 16px);
    font-weight: normal;
  }
`;

export const CaseSectionContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CaseSectionContent = styled.div`
  height: auto;
  max-width: 996px;
  min-width: 100px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: #dfe2f0;
  border-radius: 10px;
  padding: 54px 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  h3 {
    font-size: clamp(18px, 2.5vw, 24px);
    font-weight: bold;
  }

  p {
    font-size: clamp(14px, 2vw, 20px);
    font-weight: 500;
  }
  a {
    font-size: clamp(14px, 2vw, 20px);
    color: #004688;
  }

  @media (max-width: 1340px) {
    max-width: 896px;
    padding: 44px 90px;
  }

  @media (max-width: 970px) {
    max-width: 696px;
    padding: 34px 50px;
  }

  @media (max-width: 900px) {
    max-width: 680px;
    padding: 30px 40px;
  }

  @media (max-width: 800px) {
    max-width: 580px;
    padding: 30px 40px;
  }

  @media (max-width: 700px) {
    max-width: 480px;
  }

  @media (max-width: 640px) {
    max-width: 380px;
    padding: 20px 30px;
  }

  @media (max-width: 510px) {
    max-width: 300px;
    padding: 20px 20px;
  }
`;

export const CaseSectionContentImage = styled.div`
  //flex: 0 0 50%;
  width: clamp(180px, 30%, 400px);
  aspect-ratio: 1 / 1;
  background-image: url(${caseSectionImage});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  margin-bottom: 40px;

  @media (max-width: 740px) {
    margin-bottom: 20px;
  }
`;

export const CaseSectionLinks = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-auto-rows: auto;
  justify-items: start;
  align-items: center;
  gap: 24px;
  margin: 72px 0px 50px;

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  a {
    color: #24282a;
    font-size: clamp(14px, 2vw, 20px);
    font-weight: 500;
  }

  span:nth-child(1) {
    grid-row: 1;
    grid-column: 1;
  }

  span:nth-child(2) {
    grid-row: 2;
    grid-column: 1;
  }

  span:nth-child(3) {
    grid-row: 2;
    grid-column: 2;
  }

  @media (max-width: 970px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 16px;

    span:nth-child(1),
    span:nth-child(2),
    span:nth-child(3) {
      grid-row: auto;
      grid-column: auto;
    }

    span {
      justify-content: center;
    }
  }

  @media (max-width: 700px) {
    margin-top: 50px;
  }
`;

export const CaseSectionLeftTopDetail = styled.div`
  position: absolute;
  display: flex;
  gap: clamp(5px, 1vw, 10px);
  left: clamp(10px, 2vw, 20px);
  top: clamp(10px, 2vw, 20px);

  div {
    width: clamp(8px, 1.5vw, 15px);
    height: clamp(8px, 1.5vw, 15px);
    border-radius: 50%;
    background-color: #bfc2d4;
  }
  div:nth-child(1) {
    background-color: #4a3a9c;
  }
`;
export const CaseSectionRightTopDetail = styled.div`
  position: absolute;
  display: flex;
  gap: clamp(5px, 1vw, 10px);
  right: clamp(10px, 2vw, 20px);
  top: clamp(10px, 2vw, 20px);

  div {
    width: clamp(8px, 1.5vw, 15px);
    height: clamp(8px, 1.5vw, 15px);
    border-radius: 50%;
    background-color: #bfc2d4;
  }
`;

export const CaseSectionDots = styled.div`
  width: 100%;
  max-width: 1128px;
  height: 700px;
  top: 150px;
  bottom: 0;
  z-index: 0;
  position: absolute;
  background-image: url(${caseSectionDotsImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
