import React from 'react'

const YouTubeIframe = ({ width, height, embedId }) => {
  const srcValue = `https://www.youtube.com/embed/${embedId}`

  return (
    <iframe
      width={width}
      height={height}
      src={srcValue}
      frameBorder="0"
      title="Embedded youtube video"
    />
  )
}

export default YouTubeIframe
