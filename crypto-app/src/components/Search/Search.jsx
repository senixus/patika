import React from "react";
import { SearchInput, SearchWrapper } from "./search.style";

const Search = ({ onChange }) => {
  return (
    <SearchWrapper>
      <SearchInput onChange={onChange} type="text" placeholder="search" />
    </SearchWrapper>
  );
};

export default Search;
