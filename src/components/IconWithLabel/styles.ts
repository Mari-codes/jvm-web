import { Icon } from '@iconify/react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 1340px) {
    gap: 38px;
  }

  @media (max-width: 1220px) {
    gap: 30px;
  }

  @media (max-width: 1154px) {
    gap: 25px;
  }

  @media (max-width: 510px) {
    gap: 10px;
  }
`;

export const StyledIcon = styled(Icon)`
  width: clamp(28px, 5vw, 43px);
  height: clamp(28px, 5vw, 43px);
  color: #24282a;
`;

export const Text = styled.span`
  font-size: clamp(14px, 2.5vw, 18px);
  color: #939fa4;
  max-width: 420px;

  @media (max-width: 440px) {
    max-width: 200px;
  }
`;
