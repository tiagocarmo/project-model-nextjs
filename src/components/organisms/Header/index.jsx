import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../molecules/Menu';

import * as Style from './style';

const Header = ({ title }) => {
  return (
    <>
      <Style.ResponsiveGrid>
        <Style.Title>{title}</Style.Title>
      </Style.ResponsiveGrid>
      <Style.Header>
        <Style.ResponsiveGrid>
          <Menu />
        </Style.ResponsiveGrid>
      </Style.Header>
    </>
  );
};

Header.defaultProps = {
  title: 'Report sobre a COVID-19 no Brasil'
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
