import styled from "styled-components";
import caseSectionImage from '../../assets/case-section-image.png'
import caseSectionDotsImage from '../../assets/case-section-dots.png'

export const CaseSectionWrapper = styled.div`
    width:100%;
    height:100dvh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;

`
export const CaseSectionTitle = styled.div`
    text-align:center;
    color: #24282a;

    h3{
        font-size:40px;
        font-weight:normal;
    }
    h1{
        font-size:40px;
        font-weight:bold;
    }
    p{
        color:#939FA4;
        font-size:16px;
        font-weight:normal;
    }

`

export const CaseSectionContentWrapper = styled.div`
    height:100%;
    width:80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    padding: 50px 0px;
    position:relative;
    
`

export const CaseSectionContent = styled.div`
    height:100%;
    width:90%;
    display:flex;
    position:relative;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    text-align: center;
    background-color:#DFE2F0;
    border-radius:10px;
    padding:50px 0px;
    box-shadow:0px 4px 4px rgba(0,0,0,0.2);
    h3{
        font-size:24px;
        font-weight:bold;
    }

    p{
        font-size:20px;
        font-weight:500;
    }
    a{
        color:#004688;
    }

`

export const CaseSectionContentImage = styled.div`
    width: 20%;
    aspect-ratio: 1 / 1;
    background-image:url(${caseSectionImage});
    background-repeat: no-repeat;
    background-size: contain;
    border-radius:50%;


`

export const CaseSectionLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  justify-items:start;
  align-items:center;
  gap: 24px;
  
  span{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:4px;   
  }
      a{
        color:#24282A;
        font-size:20px;
        font-weight:500;

    }
  
  span:nth-child(1){
  grid-row: 1;
  grid-column: 1;

}

  span:nth-child(2){
  grid-row: 2;
  grid-column: 1;
}

  span:nth-child(3){
  grid-row: 2;
  grid-column: 2;
}
  
`

export const CaseSectionLeftTopDetail = styled.div`
    position:absolute;
    display:flex;
    gap: 10px;
    left: 20px;
    top:20px;
    
    div{
        width:15px;
        height:15px;
        border-radius: 50%;
        background-color:#BFC2D4;
        
    }
    div:nth-child(1){
        background-color:#4A3A9C;
    }
`
export const CaseSectionRightTopDetail = styled.div`
position:absolute;
    display:flex;
    gap: 10px;
    right: 20px;
    top:20px;
    
    div{
        width:15px;
        height:15px;
        border-radius: 50%;
        background-color:#BFC2D4;
        
    }
`
export const CaseSectionDots = styled.div`
    width:100%;
    height:100%;
    bottom:0;
    z-index: -10;
    position:absolute;
    background-image:url(${caseSectionDotsImage});
    background-repeat: no-repeat;
    background-size: contain;


`