import React from 'react'

import { Card, CardText, CardBody, CardTitle, CardImg, CardSubtitle, Row, Col } from 'reactstrap'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const VideoCard = ({ data, handleRedirectToChannel }) => {
  const { snippet, id } = data

  const handleRedirectToVideo = () => window.open(`https://www.youtube.com/watch?v=${id.videoId}`)

  const publishTime = new Date(snippet.publishTime).toLocaleString()

  return (
    <Card onMouseDown={() => handleRedirectToVideo()}>
      <CardBody>
        <Row>
          <Col md="4" sm="12" xs="12" className="">
            <CardImg top width="100%" src={snippet.thumbnails.medium.url} alt="video thumbnail" />
          </Col>
          <Col md="8" sm="12" xs="12" className="">
            <CardTitle tag="h5" className="text-truncate">
              {snippet.title}
            </CardTitle>
            <CardSubtitle>
              <FontAwesomeIcon icon={faClock} /> {publishTime}
            </CardSubtitle>
            <CardText
              className="text-truncate"
              onMouseDown={() => handleRedirectToChannel(snippet.channelId)}
            >
              By <b className="channel-name">{snippet.channelTitle}</b>
            </CardText>
            <CardText>Description: {snippet.description}</CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default VideoCard
