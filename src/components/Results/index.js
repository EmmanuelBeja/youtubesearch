import React from 'react'
import { useSelector } from 'react-redux'

import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'
import NoDataIndication from './NoDataIndication'
import Loading from './Loading'

import './Results.scss'

const Results = () => {
  const { loading, results } = useSelector((state) => state.search)

  // if (loading) {
  //   return <Loading />
  // }

  const handleRedirectToChannel = (channelId) =>
    window.open(`https://www.youtube.com/channel/${channelId}`)

  return (
    <div className="results-container">
      {loading ? (
        <Loading />
      ) : (
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
          {!results || (results.length === 0 && <NoDataIndication />)}
        </>
      )}
    </div>
  )
}

export default Results
