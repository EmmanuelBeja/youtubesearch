import React from 'react'
import { useSelector } from 'react-redux'

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

import './Results.scss'

const Results = () => {
  const { loading, results } = useSelector((state) => state.search)

  if (loading) {
    return <FontAwesomeIcon icon={faCircleNotch} pulse />
  }

  const handleRedirectToChannel = (channelTitle) =>
    window.open(`https://www.youtube.com/c/${channelTitle}`)

  return (
    <>
      {results.map((data, index) => (
        <div key={index}>
          {data.id.kind === 'youtube#channel' ? (
            <ChannelCard data={data} handleRedirectToChannel={handleRedirectToChannel} />
          ) : (
            <VideoCard data={data} handleRedirectToChannel={handleRedirectToChannel} />
          )}
        </div>
      ))}
    </>
  )
}

export default Results
