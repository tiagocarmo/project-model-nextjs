import React from 'react';
import MenuLink from '../../atoms/MenuLink';
import { useRouter } from 'next/router';

import * as Style from './style';

const Menu = () => {
  const router = useRouter();
  return (
    <Style.List>
      <Style.ListItem>
        <MenuLink
          url='/'
          text='Home'
          className={router.pathname === '/' ? 'active' : ''}
        />
      </Style.ListItem>
      <Style.ListItem>
        <MenuLink
          url='/about'
          text='Sobre'
          className={router.pathname === '/about' ? 'active' : ''}
        />
      </Style.ListItem>
      <Style.ListItem>
        <MenuLink
          url='/privacy-policy'
          text='Política Privacidade'
          className={router.pathname === '/privacy-policy' ? 'active' : ''}
        />
      </Style.ListItem>
    </Style.List>
  );
};

export default Menu;
