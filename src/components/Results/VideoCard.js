import React from 'react'

import { Row, Col } from 'reactstrap'
import { Card, CardMedia, Chip } from 'ui-neumorphism'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const VideoCard = ({ data, handleRedirectToChannel }) => {
  const { snippet, id } = data

  const handleRedirectToVideo = () => window.open(`https://www.youtube.com/watch?v=${id.videoId}`)

  const publishTime = new Date(snippet.publishTime).toLocaleString()

  return (
    <Col md="4" sm="6" xs="12" onMouseDown={() => handleRedirectToVideo()}>
      <Card className="card" elevation={4}>
        <Row>
          <Col md="12" sm="12" xs="12" className="">
            <CardMedia
              className="card-image"
              width="100%"
              src={snippet.thumbnails.medium.url}
              alt="video thumbnail"
            />
          </Col>
          <Col md="12" sm="12" xs="12" className="card-content">
            <h5 className="text-truncate">{snippet.title}</h5>

            <div
              className="text-truncate card-content__subtitle"
              onMouseDown={() => handleRedirectToChannel(snippet.channelId)}
            >
              <Chip key="5" className="ma-3" prepend={<FontAwesomeIcon icon={faUser} />}>
                <span className="channel-name">{snippet.channelTitle}</span>
              </Chip>
              <small className="card-subtitle">
                <FontAwesomeIcon icon={faClock} /> {publishTime}
              </small>
            </div>
            <p className="text-truncate">{snippet.description}</p>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default VideoCard
