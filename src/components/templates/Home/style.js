import styled from 'styled-components';

export const ResponsiveGrid = styled.div`
  width: calc(100% - 32px);
  max-width: 1200px;
  min-width: 300px;
  margin: 0 auto;
  padding: 16px;
`;

export const Table = styled.table`
  color: #ffffff;
  background: #20232a;
  border-radius: 10px;
  width: 100%;
  padding: 16px;
  & tr {
    opacity: 0.7;
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  padding-bottom: 16px;
`;

export const TableRow = styled.tr`
  & td {
    padding: 8px 4px;
  }
  &:hover {
    opacity: 1;
  }
`;
