import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0 135px 117px;

  @media (max-width: 1340px) {
    padding: 0px 110px 107px;
  }

  @media (max-width: 1220px) {
    padding: 0px 90px 87px;
  }

  @media (max-width: 1154px) {
    padding: 0px 40px 67px;
  }

  @media (max-width: 480px) {
    padding: 0px 20px 47px;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border-top: 1px solid #e1e1e1;
  margin-bottom: 122px;
`;

export const LinkArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  text-align: left;
`;

export const Column = styled.div`
  font-size: clamp(14px, 2.2vw, 16px);
  color: #000000;
`;

export const ListTitle = styled.h4`
  font-weight: 500;
  margin-bottom: 30px;
  font-size: clamp(12px, 2vw, 14px);
`;

export const List = styled.ul`
  color: #939fa4;
`;

export const ListItem = styled.li`
  font-size: clamp(12px, 2vw, 14px);
  color: #939fa4;
  margin-bottom: 14px;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #004688;
  }
`;

export const Copyright = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 116px;
  border-top: 1px solid #ffffff;
  text-align: left;
`;

export const CopyrightText = styled.p`
  font-size: clamp(10px, 1.8vw, 12px);
  color: #999999;
`;
