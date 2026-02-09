import styled from 'styled-components';

export const AnchorWrapper = styled.a<{
  $variant?: 'secondary' | 'tertiary' | 'quaternary' | 'nav';
}>`
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    border 0.2s ease,
    color 0.2s ease;

  ${(props) =>
    (!props.$variant || props.$variant === 'nav') &&
    `
      padding: 6px 4px;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 0%;
        height: 2px;
        background-color: #ffffff;
        transition: width 0.2s ease;
      }

      &:hover:after {
        width: 100%;
      }
      
         @media (max-width: 640px) {
        height: 44px;
        font-size: 13px;
      }
        @media (max-width: 380px) {
      height: 40px;
      font-size: 12px;
    }
    `}

  ${(props) =>
    props.$variant === 'secondary'
      ? `
        width: 130px;
        height: 50px;
        border-radius: 65px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(45deg, #4FACFE, #00F2FE);
        box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.5);

        &:hover {
          background-image: linear-gradient(45deg, #3B8DFF, #00C6FF);
          box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.45);
        }

           @media (max-width: 640px) {
        width: 110px;
        height: 44px;
        font-size: 13px;
      }

      @media (max-width: 380px) {
      width: 100px;
      height: 40px;
      font-size: 12px;
    }
      `
      : ''}

  ${(props) =>
    props.$variant === 'tertiary'
      ? `
        width: 130px;
        height: 50px;
        border-radius: 65px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(225deg, #0270D7, #00498E, #004688);
        box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.5);

        &:hover {
          background-image: linear-gradient(225deg, #0158B0, #003B78, #00335F);
          box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.45);
        }
        
           @media (max-width: 640px) {
        width: 110px;
        height: 44px;
        font-size: 13px;
      }

      @media (max-width: 380px) {
      width: 100px;
      height: 40px;
      font-size: 12px;
    }
      `
      : ''}

  ${(props) =>
    props.$variant === 'quaternary'
      ? `
        width: 130px;
        height: 50px;
        border-radius: 65px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 1px solid #ffffff;

        &:hover {
          background-color: #004688;
          border-color: #004688;
        }

         @media (max-width: 640px) {
        width: 110px;
        height: 44px;
        font-size: 13px;
      }

      @media (max-width: 380px) {
      width: 100px;
      height: 40px;
      font-size: 12px;
    }
      `
      : ''}
`;
