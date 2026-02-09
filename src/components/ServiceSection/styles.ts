import styled, { css } from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #000;
  gap: 80px;
  flex-wrap: wrap;
  padding: 70px 0 200px;

  @media (max-width: 950px) {
    padding: 70px 0px 100px;
  }

  @media (max-width: 510px) {
    padding: 70px 0px 60px;
  }
`;

export const ServiceCard = styled.div`
  text-align: center;
  max-width: 300px;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: clamp(18px, 3vw, 24px);
  margin: 16px 0 8px 0;
  color: #000;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: clamp(14px, 2.2vw, 16px);
  margin: 0;
  color: #939fa4;
`;

export const StyledCircle = styled.div<{ $bg?: string; $secondary?: boolean }>`
  background: ${({ $secondary, $bg }) =>
    $secondary
      ? '#fff'
      : $bg || 'linear-gradient(180deg, #232a34 0%, #4e54c8 100%)'};
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.18);
  border-radius: 50%;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px auto;
  ${({ $secondary }) =>
    $secondary &&
    css`
      border: 0.5px solid #dbe0ef;
    `}
`;
