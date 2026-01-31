import { BackWrapper, Logo, LogoWrapper } from './style';
import apointly from '../../assets/apointly.png';
import apt1006 from '../../assets/apt-1006.png';
import sergioRenato from '../../assets/sergio-renato.png';
import muscleMate from '../../assets/musclemate-logo-white.png';
export const LogoSection = () => {
  return (
    <>
      <BackWrapper>
        <LogoWrapper>
          <Logo src={sergioRenato} w={75} h={80} alt="" />
          <Logo src={apt1006} w={80} h={100} alt="" />
          <Logo src={apointly} w={97} h={91} alt="" />
          <Logo src={muscleMate} w={106} h={75} alt="" />
        </LogoWrapper>
      </BackWrapper>
    </>
  );
};
