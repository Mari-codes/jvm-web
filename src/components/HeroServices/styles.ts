import styled from 'styled-components';

export const WrapperHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 520px;
  margin: 50px;
  background-color: transparent;
`;

export const ContentWrapper = styled.div`
  width: 425px;
`;

export const TitleWrapper = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #2f2f2f;
  font-weight: 200;
`;

export const SubTitleWrapper = styled.h2`
  margin: 0;
  font-size: 42px;
  line-height: 1.4;
  color: #2f2f2f;
  font-weight: 200;
`;

export const ParagraphWrapper = styled.p`
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(96, 101, 103, 1);
  font-weight: 300;
`;

export const ParagraphBolder = styled.span`
  font-weight: 700;
`;
