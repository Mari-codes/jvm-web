import styled from 'styled-components';

export const WrapperHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
  background-color: transparent;

  @media (max-width: 950px) {
    margin-top: 30px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 425px;
  min-width: 300px;
  width: 100%;
`;

export const TitleWrapper = styled.h2`
  margin: 0;
  font-size: clamp(14px, 2vw, 20px);
  color: #2f2f2f;
  font-weight: 200;
`;

export const SubTitleWrapper = styled.h2`
  margin: 0;
  font-size: clamp(24px, 4.5vw, 42px);
  line-height: 1.4;
  color: #2f2f2f;
  font-weight: 200;
`;

export const ParagraphWrapper = styled.p`
  margin-top: 12px;
  font-size: clamp(14px, 2.2vw, 15px);
  line-height: 1.6;
  color: rgba(96, 101, 103, 1);
  font-weight: 300;
`;

export const ParagraphBolder = styled.span`
  font-weight: 700;
`;
