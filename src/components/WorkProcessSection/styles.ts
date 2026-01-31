import { Icon } from '@iconify/react';
import styled from 'styled-components';

export const ProcessContainer = styled.section`
  background-color: #f4f6fd;
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 0px 315px 318px;
`;

export const Image = styled.img`
  width: 450px;
  height: 700px;
  position: absolute;
  top: -135px;
  left: 135px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 48px;
  font-weight: 300;
  width: 409px;
  margin-bottom: 41px;
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const IconList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 41px;
`;
