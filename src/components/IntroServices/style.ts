import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  padding: 94px 135px;

  @media (max-width: 1340px) {
    padding: 84px 110px;
  }

  @media (max-width: 1220px) {
    padding: 64px 90px;
  }

  @media (max-width: 1154px) {
    padding: 54px 40px;
  }

  @media (max-width: 920px) {
    flex-direction: column;
    gap: 0px;
    align-items: center;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 20px;
`;

export const LeftWrapper = styled.div`
  flex: 1;
  @media (max-width: 920px) {
    flex: unset;
    text-align: center;
  }
`;

export const InfoTitle = styled.div`
  cursor: pointer;
  text-align: center;
  color: rgba(151, 151, 151, 1);
`;

export const RightWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 28px;

  @media (max-width: 920px) {
    gap: 18px;
  }
`;
