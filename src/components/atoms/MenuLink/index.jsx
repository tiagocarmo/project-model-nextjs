import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import * as Style from './style';

const MenuLink = ({ text, url, className }) => {
  return (
    <Link href={url}>
      <Style.LinkItem className={className}>{text}</Style.LinkItem>
    </Link>
  );
};

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default MenuLink;
