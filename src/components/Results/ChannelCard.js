import React from 'react'

import { Card, CardText, CardBody, CardTitle, CardImg, Row, Col } from 'reactstrap'

const ChannelCard = ({ data, handleRedirectToChannel }) => {
  return (
    <Card
      className="channel-card"
      onMouseDown={() => handleRedirectToChannel(data.snippet.channelId)}
    >
      <CardBody>
        <Row>
          <Col md="4" sm="12" xs="12" className="channel-card__thumbnail-container">
            <CardImg
              className="channel-card__thumbnail"
              top
              width="100%"
              src={data.snippet.thumbnails.default.url}
              alt="channel thumbnail"
            />
          </Col>
          <Col md="8" sm="12" xs="12" className="">
            <CardTitle tag="h5" className="text-truncate channel-name">
              {data.snippet.channelTitle}
            </CardTitle>
            <CardText>{data.snippet.description}</CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ChannelCard
