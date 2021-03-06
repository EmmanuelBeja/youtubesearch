import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { InputGroup, InputGroupAddon, Input } from 'reactstrap'
import { useDebounce } from 'use-debounce'
import { faSearch, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RecentSearches from './RecentSearches'

import { searchActions } from './actions'

const SearchInput = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.search)

  const [searchInput, setSearchInput] = useState('')
  const [debouncingText, setDebouncingText] = useState('')
  const [debouncedText] = useDebounce(debouncingText, 2000)
  const [searches, setSearches] = useState([])
  const [showPrevSearches, setShowPrevSearches] = useState(false)

  useEffect(() => {
    debouncedText && handleSearch(debouncedText)
  }, [debouncedText])

  const handleSearch = (input) => {
    // add searched item to recent searches
    setSearches((prevState) => [...prevState, input])
    dispatch(searchActions.getSearchResults(input))
  }

  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        {loading ? (
          <FontAwesomeIcon icon={faCircleNotch} pulse />
        ) : (
          <FontAwesomeIcon icon={faSearch} />
        )}
      </InputGroupAddon>
      <Input
        name="searchInput"
        placeholder="Type here..."
        value={searchInput}
        onChange={(e) => {
          setDebouncingText(e.target.value)
          setSearchInput(e.target.value)
        }}
        onFocus={() => setShowPrevSearches(true)}
        onBlur={() => setShowPrevSearches(false)}
        autoComplete="off"
        disabled={loading}
      />
      {showPrevSearches && <RecentSearches searches={searches} handleClick={handleSearch} />}
    </InputGroup>
  )
}

export default SearchInput
