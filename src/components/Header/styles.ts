import styled from 'styled-components';

interface HeaderNavProps {
  $isOpen: boolean;
}

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;

  @media (max-width: 950px) {
    margin-bottom: 30px;
  }
`;

export const MenuMobileIcon = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 0;
  z-index: 110;

  @media (max-width: 750px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NavContainer = styled.div`
  display: contents;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
`;

export const HeaderNav = styled.nav<HeaderNavProps>`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 950px) {
    gap: 30px;
  }

  @media (max-width: 790px) {
    gap: 20px;
  }

  @media (max-width: 750px) {
    position: absolute;
    top: 56px;
    right: 10px;
    width: 180px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    padding: 16px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    transform: ${({ $isOpen }) =>
      $isOpen ? 'translateY(0)' : 'translateY(-10px)'};
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'all' : 'none')};
    z-index: 100;

    a {
      width: 100%;
      padding: 10px;
      border-radius: 65px;
      transition: background 0.2s;
      color: #fff;
      text-decoration: none;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      &:last-child {
        //background: #09bbed; ToDo: Ver qual eles preferem
        color: #fff;
        text-align: center;
        margin-top: 5px;
        font-weight: bold;
      }
    }
  }
`;
