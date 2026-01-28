import { Icon } from '@iconify/react';
import styled from 'styled-components';

export const StoresContainer = styled.section`
  position: relative;
  height: calc(640px * 0.8);
  background-color: #ffffff;
  padding: 0px 135px 80px;
  display: flex;
  align-items: flex-end;
`;
export const Image = styled.img`
  width: 450px;
  height: 700px;
  position: absolute;
  top: -135px;
  right: 135px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopIconWrapper = styled.div`
  background: linear-gradient(135deg, #ffd6d2, #feada6);
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 42px;
`;

export const TopIcon = styled(Icon)`
  width: 34px;
  height: 34px;
  color: #ffffff;
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: 300;
`;
export const Span = styled.span`
  font-weight: 500;
  font-size: 48px;
  display: inline-block;
  margin-bottom: 42px;
`;

export const StoresDescription = styled.div`
  color: #939fa4;
  font-size: 18px;
  width: 570px;
`;
