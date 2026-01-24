import React from "react";
import styled from "styled-components";

const Circle = styled.div<{ bg?: string }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ bg }) => bg || "linear-gradient(180deg, #23395d 0%, #3a506b 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 32px 0 #00000080;
  margin: 0 auto 24px auto;
`;

type Props = {
  children: React.ReactNode;
  bg?: string;
};

export function CircleBackground({ children, bg }: Props) {
  return React.createElement(Circle, { bg }, children);
}