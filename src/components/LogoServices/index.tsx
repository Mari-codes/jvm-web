import { BackWrapper, Logo, LogoWrapper } from "./style"
import Apointly from '../../assets/APOINTLY.png'
import Apt1006 from '../../assets/APT1006.png'
import SergioRenato from '../../assets/SERGIO RENATO.png'
import MuscleMate from '../../assets/MuscleMate Logo with white 1.png'
export const LogoSection = () => {
    return (

        <>
            <BackWrapper>
                <LogoWrapper>
                    <Logo src={SergioRenato} w={75} h={80} alt="" />
                
                <Logo src={Apt1006} w={80} h={100}alt="" /> 
                <Logo src={Apointly} w={97} h={91} alt="" /> 
                <Logo src={MuscleMate} w={106} h={75} alt="" />
                </LogoWrapper>
            </BackWrapper>
        </>
    )
}