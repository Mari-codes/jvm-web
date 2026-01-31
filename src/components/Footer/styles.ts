import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0 135px 117px;
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
  font-size: 16px;
  color: #000000;
`;
export const ListTitle = styled.h4`
  font-weight: 500;
  margin-bottom: 30px;
  font-size: 14px;
`;

export const List = styled.ul`
  color: #939fa4;
`;

export const ListItem = styled.li`
  font-size: 14px;
  color: #939fa4;
  margin-bottom: 14px;
  cursor: pointer;
`;

export const Copyright = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 116px;
  border-top: 1px solid #ffffff;
  text-align: left;
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  color: #999999;
`;
