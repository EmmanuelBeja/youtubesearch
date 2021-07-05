import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Row, Col, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'
import { faSearch, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify'
import RecentSearches from './RecentSearches'

import { searchActions } from './actions'

import './Search.scss'

const Search = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.search)

  const [searchValue, setSearchValue] = useState('')
  const [inputError, setInputError] = useState(false)
  const [searches, setSearches] = useState([])

  useEffect(() => {
    searchValue && setInputError(false)
  }, [searchValue])

  const handleSearch = () => {
    if (!searchValue) {
      setInputError(true)
      toast.error('Please type something to search')
      return
    }
    // add searched item to recent searches
    const updatedSearches = searches
    updatedSearches.push(searchValue)
    setSearches(updatedSearches)

    dispatch(searchActions.getSearchResults(searchValue))
  }

  const handleClickRecent = (item) => {
    dispatch(searchActions.getSearchResults(item))
    setSearchValue(item)
  }

  return (
    <Row>
      <Col
        lg={{ size: 6, offset: 3 }}
        md={{ size: 6, offset: 3 }}
        sm="12"
        xs="12"
        className="search-section"
      >
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button onClick={() => handleSearch()} outline disabled={loading}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroupAddon>
          <Input
            className="form-control"
            name="searchValue"
            placeholder="Type here..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            invalid={inputError}
            autoComplete="off"
          />
          <InputGroupAddon addonType="append">
            <Button onClick={() => handleSearch()} outline disabled={loading}>
              {loading ? <FontAwesomeIcon icon={faCircleNotch} pulse /> : 'Submit'}
            </Button>
          </InputGroupAddon>

          <RecentSearches searches={searches} handleClick={handleClickRecent} />
        </InputGroup>
      </Col>
    </Row>
  )
}

export default Search
