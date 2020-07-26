import styled from 'styled-components';

export const Header = styled.div`
  background-color: #20232a;
  color: #ffffff;
  width: 100%;
  padding: 16px 0;
`;

export const ResponsiveGrid = styled.div`
  width: calc(100% - 32px);
  max-width: 1200px;
  min-width: 300px;
  margin: 0 auto;
  padding: 16px;
`;

export const Title = styled.span`
  display: block;
  color: #20232a;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
