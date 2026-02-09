import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Anchor } from '../Anchor';
import { Logo } from '../Logo';
import {
  HeaderNav,
  HeaderWrapper,
  MenuMobileIcon,
  NavContainer,
} from './styles';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Logo />

      <MenuMobileIcon onClick={() => setIsOpen(!isOpen)}>
        <Icon icon={isOpen ? 'ph:x-duotone' : 'ph:list-duotone'} width="36" />
      </MenuMobileIcon>

      <HeaderNav $isOpen={isOpen}>
        <NavContainer onClick={() => setIsOpen(false)}>
          <Anchor text="Serviços" $variant="nav" />
          <Anchor text="Projetos" $variant="nav" />
          <Anchor text="Blog" $variant="nav" />
          <Anchor text="Contato" $variant="secondary" />
        </NavContainer>
      </HeaderNav>
    </HeaderWrapper>
  );
};
