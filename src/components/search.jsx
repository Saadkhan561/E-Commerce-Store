import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchTerm) {
        navigate('/search?s=' + searchTerm);
      }
    }, 500);

    return () => clearTimeout(delay);
  });

  const handleChange = (ev) => {
    setSearchTerm(ev.target.value);
  };

  return (
    <HeaderSearch>
      <form>
        <SearchBar
          type='text'
          name='search'
          placeholder='Search here...'
          onChange={handleChange}
        ></SearchBar>
      </form>
      <SearchBtn>Search</SearchBtn>
    </HeaderSearch>
  );
};

export default Search;

const HeaderSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 600px;
  padding: 30px;
`;

const SearchBar = styled.input`
  height: 8px;
  width: 500px;
  padding: 10px;
`;

const SearchBtn = styled.button`
  height: 30px;
  padding: 5px;
`;
