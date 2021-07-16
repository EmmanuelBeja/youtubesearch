import React from 'react'

const NoDataIndication = () => {
  return (
    <div className="text-center">
      <img
        src={`idk${Math.floor(Math.random() * 4 + 1)}.gif`}
        className="data-empty"
        alt="data empty"
      />
      <br />
      <br />
      <h3>
        <b>No results found</b>
      </h3>
      <p>Try different keywords or remove search filters</p>
    </div>
  )
}

export default NoDataIndication
