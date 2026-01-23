import styled from "styled-components";
import logoImage from '../../assets/logo-branco.png'
import celphoneImage from '../../assets/celphone.png'

export const HeroHeaderWrapper = styled.div`
    background-image: linear-gradient(
        225deg,
        #004688,
        #09BBED
    );
    height:100dvh;
    width:100%;
    display:flex;
    flex-direction:column;
`

export const HeroHeaderNavWrapper = styled.header`
    width:100%;
    height: 155px;
    display: flex;
    padding: 44px 135px;
    justify-content: space-between;

    @media (max-width: 768px) {
        padding: 44px 65px;
    }
    
`
export const HeroHeaderLogoWrapper = styled.div`
    display:flex;
    flex: auto;
    align-items:baseline;
    height:66px;
    width:216px;
    color:#FFFFFF;
    font-size:14px;
    position:relative;
    p{
        font-weight:normal;
        font-size:14px;
        position:absolute;
        bottom:0;
        left:40px;
    }


`
export const HeroHeaderLogo = styled.div`
    background-image: url(${logoImage});
    background-repeat: no-repeat;
    background-size: cover;
    height:66px;
    width:66px;
    background-position: center;

`
export const HeroHeaderNav = styled.nav`
    display: flex;
    flex: auto;
    gap:6%;
    align-items:center;
    justify-content: safe center;

`

export const HearoHeaderContentWrapper = styled.div`
    display:flex;
    height:100%;
    width:100%;
    padding: 100px 136px;

    @media(max-width:768px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding: 40px 65px;
    }
`

export const HeroHeaderTextContent = styled.div`
    height:100%;
    width:50%;
    display:flex;
    gap:50px;
    flex-direction:column;
    justify-content:start;
    align-items:flex-start;
    color:#FFFFFF;
    h1{
        font-weight:bold;
        font-size:96px;
    }
    p{
        font-weight:normal;
        font-size:20px;
    }
    @media(max-width: 768px){
        width:80%;
        gap:90px;
        h1{
            font-size:64px;
        }
        p{
            font-size:16px;
        }
    }

`
export const HeroHeaderWrapperButtons = styled.div`
    display:flex;
    gap:40px;
    width:350px;
    justify-content:safe center;
`
export const HeroHeaderWrapperImageContent = styled.div`
    height:100%;
    width:50%;
    display:flex;
    justify-content:safe center;
    align-items:center;

`
export const HeroHeaderImageContent = styled.div`
    height:450px;
    width:550px;
    background-image: url(${celphoneImage});
    background-repeat: no-repeat;
    background-size: contain;

    @media (max-width: 768px) {
        display:none;
    }
    
`