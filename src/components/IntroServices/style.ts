import styled from "styled-components";


export const HeroWrapper = styled.div`
    display: flex;
    padding: 94px 135px;
`;

export const CardWrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 25px;
 
`;

export const LeftWrapper = styled.div `
flex: 1;

`;

export const InfoTitle = styled.div`
cursor: pointer;
text-align: center;
color: rgba(151, 151, 151, 1);
`;

export const RightWrapper = styled.div `

display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 28px;

`;