import styled from 'styled-components';
import type { ButtonSize } from './interface';

interface StyledButtonProps {
  $widthSize: ButtonSize;
  $heightSize: ButtonSize;
}

export type BorderSides = {
  $top?: boolean;
  $right?: boolean;
  $bottom?: boolean;
  $left?: boolean;
};

export const CardWrapper = styled.div<BorderSides>`
  max-width: 200px;
  min-width: 140px;
  width: 100%;
  height: 180px;
  background: #e9edf7;

  border-radius: 22px;
  ${({ $top }) => $top && `border-top: 1.3px solid #004688;`}
  ${({ $right }) => $right && `border-right: 1.3px solid #004688;`}
  ${({ $bottom }) => $bottom && `border-bottom: 1.3px solid #004688;`}
  ${({ $left }) => $left && `border-left: 1.3px solid #004688;`}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 970px) {
    max-width: 180px;
    height: 150px;
  }
`;

export const ButtonWrapper = styled.button`
  color: rgba(223, 226, 240, 1);
  font-weight: 400;
  cursor: pointer;
  margin: 15px;
`;

export const IconWrapper = styled.div<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 18px;
  color: #0b4dbb;

  min-width: ${({ $widthSize }) => ($widthSize === 'sm' ? '50px' : '100px')};
  width: auto;
  height: ${({ $heightSize }) => ($heightSize === 'sm' ? '50px' : '100px')};

  svg {
    max-width: 55px;
    min-width: 40px;
    width: 100%;
    height: 55px;

    @media (max-width: 970px) {
      max-width: 40px;
    }
  }
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #24282a;
  text-align: center;
  line-height: 1.4;
  width: 90%;

  @media (max-width: 970px) {
    font-size: 16px;
  }
`;
