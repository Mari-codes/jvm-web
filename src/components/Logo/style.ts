import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
`;

export const LogoImage = styled.img`
  width: 66px;
  height: 66px;

  @media (max-width: 790px) {
    width: 56px;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: auto;
  }
`;

export const LogoText = styled.span`
  font-size: clamp(12px, 1.2vw, 14px);
  font-weight: 600;
  color: #ffffff;
  position: absolute;
  left: 46px;
  white-space: nowrap;

  @media (max-width: 790px) {
    left: 36px;
  }

  @media (max-width: 480px) {
    left: 30px;
  }
`;
