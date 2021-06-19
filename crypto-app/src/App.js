import React, { useEffect, useState } from "react";
import {
  AppWrapper,
  CoinImg,
  Table,
  Tr,
  Td,
  Tbody,
  Thead,
  Th,
  TableWrapper,
} from "./app.style";
import axios from "axios";
import Search from "./components/Search/Search";

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCryptos(response.data);
      });
  }, [cryptos]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filterCrypto = cryptos.filter((crypto) => {
    return crypto.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <AppWrapper>
      <Search onChange={handleChange} />
      <TableWrapper>
        <Table>
          <Thead>
            <Th>Rank</Th>
            <Th></Th>
            <Th style={{ textAlign: "left" }}>Coin</Th>
            <Th>Market Cap</Th>
            <Th>Price</Th>
            <Th>Volume (24h)</Th>
            <Th>Change (24h)</Th>
          </Thead>
          <Tbody>
            {filterCrypto.map((crypto) => (
              <Tr key={crypto.id}>
                <Td>{crypto.market_cap_rank}</Td>
                <Td>
                  <CoinImg src={crypto.image} width="25px" />
                </Td>
                <Td style={{ textAlign: "justify" }}>{crypto.name}</Td>
                <Td>{crypto.market_cap}</Td>
                <Td>$ {crypto.current_price.toFixed(2)}</Td>
                <Td>{crypto.total_volume}</Td>
                <Td>{crypto.market_cap_change_percentage_24h}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableWrapper>
    </AppWrapper>
  );
}

export default App;
