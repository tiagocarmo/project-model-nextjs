import styled from 'styled-components';

const ACTIVE = '#61dafb';
const REGULAR = '#ffffff';

export const LinkItem = styled.a`
  color: ${REGULAR};
  padding: 8px 16px;
  display: inline-block;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  &:hover, &.active {
    color: ${ACTIVE};
  }
  &.active {
    border-bottom: 2px solid ${ACTIVE};
  }
`;
