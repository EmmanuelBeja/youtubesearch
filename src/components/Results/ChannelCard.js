import React from 'react'

import { Row, Col } from 'reactstrap'
import { Card } from 'ui-neumorphism'

const ChannelCard = ({ data, handleRedirectToChannel }) => {
  return (
    <Col
      md="12"
      sm="12"
      xs="12"
      onMouseDown={() => handleRedirectToChannel(data.snippet.channelId)}
    >
      <Card className="channel-card" elevation={4}>
        <>
          <Row>
            <Col md="4" sm="12" xs="12" className="channel-card__thumbnail-container">
              <img
                className="channel-card__thumbnail"
                width="100%"
                src={data.snippet.thumbnails.default.url}
                alt="channel thumbnail"
              />
            </Col>
            <Col md="8" sm="12" xs="12" className="">
              <h5 className="text-truncate channel-name">{data.snippet.channelTitle}</h5>
              <p>{data.snippet.description}</p>
            </Col>
          </Row>
        </>
      </Card>
    </Col>
  )
}

export default ChannelCard
