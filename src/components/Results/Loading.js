import React from 'react'

const Loading = () => {
  return (
    <div className="text-center loading-container">
      <img src="/sync.svg" className="loading-img" alt="loading" />
      <br />
      <br />
      <p>Loading...</p>
    </div>
  )
}

export default Loading
