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
          text='Home (render no client)'
          className={router.pathname === '/' ? 'active' : ''}
        />
      </Style.ListItem>
      <Style.ListItem>
        <MenuLink
          url='/ssr'
          text='SSR (render no server)'
          className={router.pathname === '/ssr' ? 'active' : ''}
        />
      </Style.ListItem>
      <Style.ListItem>
        <MenuLink
          url='/static'
          text='Static (render na build)'
          className={router.pathname === '/static' ? 'active' : ''}
        />
      </Style.ListItem>
      <Style.ListItem>
        <MenuLink
          url='/params/ssr/ac'
          text='Render no server com param'
          className={router.pathname === '/params/ssr/ac' ? 'active' : ''}
        />
      </Style.ListItem>
      <Style.ListItem>
        <MenuLink
          url='/params/client/ac'
          text='Render no client com param'
          className={router.pathname === '/params/client/ac' ? 'active' : ''}
        />
      </Style.ListItem>
      <Style.ListItem>
        <MenuLink
          url='/theme/blue'
          text='Render no client com theme'
          className={router.pathname === '/theme/blue' ? 'active' : ''}
        />
      </Style.ListItem>
      <Style.ListItem>
        <MenuLink
          url='/theme/red'
          text='Render no server com theme'
          className={router.pathname === '/theme/red' ? 'active' : ''}
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
