import React from 'react'
import { useSelector } from 'react-redux'

import { Row } from 'reactstrap'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'
import NoDataIndication from './NoDataIndication'
import Loading from './Loading'

import './Results.scss'

const Results = () => {
  const { loading, results } = useSelector((state) => state.search)

  const handleRedirectToChannel = (channelId) =>
    window.open(`https://www.youtube.com/channel/${channelId}`)

  return (
    <Row className="results-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          {results.map((data, index) => (
            <React.Fragment key={index}>
              {data.id.kind === 'youtube#channel' ? (
                <ChannelCard data={data} handleRedirectToChannel={handleRedirectToChannel} />
              ) : (
                <VideoCard data={data} handleRedirectToChannel={handleRedirectToChannel} />
              )}
            </React.Fragment>
          ))}
          {!results || (results.length === 0 && <NoDataIndication />)}
        </>
      )}
    </Row>
  )
}

export default Results
