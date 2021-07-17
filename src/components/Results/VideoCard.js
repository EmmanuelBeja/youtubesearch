import React, { useState } from 'react'

import { Row, Col } from 'reactstrap'
import { Card, CardMedia, Chip, Dialog } from 'ui-neumorphism'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import YouTubeIframe from './YouTubeIframe'

const VideoCard = ({ data, handleRedirectToChannel }) => {
  const { snippet, id } = data
  const [showModal, setShowModal] = useState(false)

  const publishTime = new Date(snippet.publishTime).toLocaleString()

  return (
    <Col md="4" sm="6" xs="12" onMouseDown={() => setShowModal(true)}>
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

      <Dialog visible={showModal} onClose={() => setShowModal(false)} className="dialog">
        <Card className="dialog-card">
          <YouTubeIframe embedId={id.videoId} width={800} height={500} />
        </Card>
      </Dialog>
    </Col>
  )
}

export default VideoCard
