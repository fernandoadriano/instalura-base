
import React from 'react';
import { Logo } from '../../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';
import { Button } from '../Button';
import Text from '../../foundation/Text';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {[
          { url: '/', name: 'Home' },
          { url: '/faq', name: 'Perguntas Frequentes' },
          { url: '/sobre', name: 'Sobre' },
        ].map((link) => (
          <li key={link.url}>
            <Text variant='smallestException' tag='a' href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant='secondary.main'>
          Entrar
        </Button>
        <Button variant='primary.main'>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  ); 
}

