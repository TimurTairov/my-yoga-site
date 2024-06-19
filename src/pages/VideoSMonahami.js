import { Container, Accordion, Image } from 'react-bootstrap'
import { satiyaTedjasi, advaitavadini, ramanatha, adimata, maheshvari, aravindini } from '../helpers/MonahiVideo'
import YoutubePlayer from '../helpers/YoutubePlayer'
import '../styles/Gif.css'
import '../styles/Slider.css'
import '../styles/Video.css'
import '../styles/VideoSMonahami.css'

const VideoSMonahami = () => {
  return (
    <div className='videoSMonahami'>
      <Container>
        <h1 className="title mb-5 d-flex justify-content-center">Видео с монахами</h1>

        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Свамини Сатья Теджаси Гири</Accordion.Header>
            <Accordion.Body>
              <YoutubePlayer videoHub={satiyaTedjasi} />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Свамини Адвайтавадини Гири</Accordion.Header>
            <Accordion.Body>
              <YoutubePlayer videoHub={advaitavadini} />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Раманатха Гири</Accordion.Header>
            <Accordion.Body>
              <YoutubePlayer videoHub={ramanatha} />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Адимата Гири</Accordion.Header>
            <Accordion.Body>
              <YoutubePlayer videoHub={adimata} />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Махешвари Гири</Accordion.Header>
            <Accordion.Body>
              <YoutubePlayer videoHub={maheshvari} />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Аравиндини Гири</Accordion.Header>
            <Accordion.Body>
              <YoutubePlayer videoHub={aravindini} />
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>

        <br />
        <Image src='https://media.giphy.com/media/maYI2NHuFi1idHwvFb/giphy.gif' className='videoSMonahami-gif mt-5' />

      </Container >
    </div>

  )
}

export default VideoSMonahami