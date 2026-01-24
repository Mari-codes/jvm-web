import styled from "styled-components";
import type { ButtonSize } from "./interface";

interface StyledButtonProps {
    $widthSize: ButtonSize;
    $heightSize: ButtonSize;
  }

export const CardWrapper = styled.div`
  width: 200px;
  height: 180px;
  background: #e9edf7;

  border-radius: 22px;
  border: 1.3px solid #004688;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.button`
color: #979797;
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


  min-width: ${({ $widthSize }) => ($widthSize === "sm" ? "50px" : "100px")};
  width: auto;
  height: ${({ $heightSize }) => ($heightSize === "sm" ? "50px" : "100px")};

  svg {
    width: 55px;
    height: 55px;}
  
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #24282A;
  text-align: center;
  line-height: 1.4;
`;
