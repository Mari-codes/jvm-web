import styled from 'styled-components';

export const TextSection = styled.div`
  padding: 130px 634px 400px 284px;

  @media (max-width: 1340px) {
    padding: 120px 624px 390px 274px;
  }

  @media (max-width: 1220px) {
    padding: 100px 504px 370px 254px;
  }

  @media (max-width: 1154px) {
    padding: 50px 400px 270px 154px;
  }

  @media (max-width: 900px) {
    padding: 40px 300px 170px 94px;
  }

  @media (max-width: 640px) {
    padding: 40px 200px 150px 94px;
  }

  @media (max-width: 510px) {
    padding: 40px 150px 130px 94px;
  }

  @media (max-width: 440px) {
    padding: 40px 100px 110px 74px;
  }
`;

export const Text = styled.p`
  font-size: clamp(14px, 2.5vw, 20px);
  line-height: 1.5;
  color: #000;
  margin-bottom: 24px;
  font-weight: 500;
`;
