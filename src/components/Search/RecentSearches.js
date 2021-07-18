import React from 'react'
import { useSelector } from 'react-redux'

const RecentSearches = ({ searches, handleClick }) => {
  const { loading } = useSelector((state) => state.search)
  const searchItem = searches
  searchItem.reverse()

  const listItems = () => {
    return searchItem.map((item, index) => (
      <div className="autocomplete__item" key={index} onMouseDown={() => handleClick(item)}>
        {item}
      </div>
    ))
  }

  return (
    <div className={searches.length === 0 || loading ? 'd-none' : 'search__autocomplete'}>
      <div className="autocomplete">
        <div className="autocomplete__info">RECENT SEARCHES</div>
        {listItems()}
      </div>
    </div>
  )
}

export default RecentSearches
