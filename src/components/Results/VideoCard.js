import React, { useState, useEffect } from 'react'

import { Row, Col } from 'reactstrap'
import { Card, CardMedia, Chip, Dialog } from 'ui-neumorphism'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import YouTubeIframe from './YouTubeIframe'
import moment from 'moment'

const VideoCard = ({ data, handleRedirectToChannel }) => {
  const { snippet, id } = data
  const [showModal, setShowModal] = useState(false)
  const [height, setHeight] = useState(500)
  const [width, setWidth] = useState(800)

  // choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 576) {
      setHeight(200)
      setWidth(300)
      return true
    }

    setHeight(500)
    setWidth(800)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  const publishTime = moment(snippet.publishTime).format('dddd MM YYYY')

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
              <i>
                <FontAwesomeIcon icon={faClock} /> {publishTime}
              </i>
            </div>
            <p className="text-truncate">{snippet.description}</p>
          </Col>
        </Row>
      </Card>

      <Dialog visible={showModal} onClose={() => setShowModal(false)} className="dialog">
        <Card className="dialog-card">
          <YouTubeIframe embedId={id.videoId} width={width} height={height} />
        </Card>
      </Dialog>
    </Col>
  )
}

export default VideoCard
