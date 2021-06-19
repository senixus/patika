import styled from "styled-components";

export const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  background-color: #dbe6fd;
  padding: 1rem;
  border-radius: 10px;
`;

export const CoinImg = styled.img`
  width: 25px;
  height: auto;
`;

export const TableWrapper = styled.div`
  overflow-y: scroll;
  height: 700px;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border-spacing: 0;
  margin: 2rem 0;
`;

export const Th = styled.th`
  padding: 1rem;
`;

export const Tbody = styled.tbody``;

export const Thead = styled.thead`
  background-color: #343f56;
  color: #fdeddd;
  position: sticky;
  top: 0;
`;

export const Td = styled.td`
  padding: 0.6rem;
`;

export const Tr = styled.tr`
  :nth-child(even) {
    background-color: #f8eded;
  }

  :nth-child(odd) {
    background-color: #f5e6ca;
  }
`;
