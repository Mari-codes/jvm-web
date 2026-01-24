import styled from "styled-components";
import type { LogoProps } from "./interface";

export const BackWrapper = styled.div`

    width: 100%;
    height: 120px;

    background-color: #004688;

    display: flex;


    margin-top: 20px;

    justify-content: space-around;
    /* align-items: baseline; */
`;



export const Logo = styled.img<LogoProps>`
    width: ${({ w }) => w}px;
    height: ${({ h }) => h}px;
    
`

export const LogoWrapper = styled.div`
width: 100%;
height: 100%;
align-items: center;
display: flex;
justify-content: space-around;
`;