import React from 'react'

import { Card, CardText, CardBody, CardTitle, CardImg, CardSubtitle, Row, Col } from 'reactstrap'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const VideoCard = ({ data, handleRedirectToChannel }) => {
  const handleRedirectToVideo = () =>
    window.open(`https://www.youtube.com/watch?v=${data.id.videoId}`)

  return (
    <Card onMouseDown={() => handleRedirectToVideo()}>
      <CardBody>
        <Row>
          <Col md="4" sm="12" xs="12" className="">
            <CardImg
              top
              width="100%"
              src={data.snippet.thumbnails.medium.url}
              alt="video thumbnail"
            />
          </Col>
          <Col md="8" sm="12" xs="12" className="">
            <CardTitle tag="h5" className="text-truncate">
              {data.snippet.title}
            </CardTitle>
            <CardSubtitle>
              <FontAwesomeIcon icon={faClock} /> {data.snippet.publishTime}
            </CardSubtitle>
            <CardText
              className="text-truncate"
              onMouseDown={() => handleRedirectToChannel(data.snippet.channelId)}
            >
              By <b className="channel-name">{data.snippet.channelTitle}</b>
            </CardText>
            <CardText>Description: {data.snippet.description}</CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default VideoCard
