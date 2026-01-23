import styled from "styled-components";

export const AnchorWrapper = styled.a<{$variant?: "secondary" | "tertiary" | "quaternary"}>`
    color: #FFFFFF;
    font-size: 14px;
    cursor: pointer;

    ${props => props.$variant === "secondary" ?
        `
        width:130px;
        height:50px;
        border-radius: 65px 65px 65px 65px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(
        45deg,
        #4FACFE,
        #00F2FE
    );
        box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.5);
        `
    : props.$variant === "tertiary" ? 
        `
        width:130px;
        height:50px;
        border-radius: 65px 65px 65px 65px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(
        225deg,
        #0270D7,
        #00498E,
        #004688
    );
        box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.5);
        `
    : props.$variant === "quaternary" ? 
        `
        background-color:transparent;
        width:130px;
        height:50px;
        border-radius: 65px 65px 65px 65px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid;
        `
    : ""    }
`