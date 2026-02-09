import logoImg from '../../assets/img/logo-branco.png';
import { LogoImage, LogoText, LogoWrapper } from './style';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage src={logoImg} alt="JVM Webmarketing" />
      <LogoText>JVM WEBMARKETING</LogoText>
    </LogoWrapper>
  );
};
