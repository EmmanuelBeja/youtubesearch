import React from 'react'

import { Navbar } from 'reactstrap'
import SearchInput from './SearchInput'

import './Search.scss'

const Search = () => {
  return (
    <Navbar color="light" light expand="md" className="fixed-top">
      <div className="search-section">
        <SearchInput />
      </div>
    </Navbar>
  )
}

export default Search
