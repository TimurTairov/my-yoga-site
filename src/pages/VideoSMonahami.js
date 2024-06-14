import ReactPlayer from 'react-player/youtube'
import { Container, Accordion, Image } from 'react-bootstrap'
import { satiyaTedjasi, advaitavadini, ramanatha, adimata, maheshvari, aravindini } from '../helpers/MonahiVideo'
import playing from '../img/youtube2.png'
import '../styles/Gif.css'
import '../styles/Slider.css'
import '../styles/Video.css'

const VideoSMonahami = () => {
  return (
    <Container>
      <h1 className='title'>Видео с монахами</h1>

      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Свамини Сатья Теджаси Гири</Accordion.Header>
          <Accordion.Body>

            {satiyaTedjasi.map(video => (
              <div key={video.url} className='video-container'>
                <h6 className='video-title'>{video.title}</h6>
                <ReactPlayer
                  className='react-player'
                  light
                  url={video.url}
                  playIcon={<img src={playing} alt='playing' width='70' />}
                  controls
                  playing
                  width='100%'
                  height='40vh'
                />
              </div>
            ))}

          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="1">
          <Accordion.Header>Свамини Адвайтавадини Гири</Accordion.Header>
          <Accordion.Body>

            {advaitavadini.map(video => (
              <div key={video.url} className='video-container'>
                <h6 className='video-title'>{video.title}</h6>
                <ReactPlayer
                  className='react-player'
                  light
                  url={video.url}
                  playIcon={<img src={playing} alt='playing' width='70' />}
                  controls
                  playing
                  width='100%'
                  height='40vh'
                />
              </div>
            ))}

          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="2">
          <Accordion.Header>Раманатха Гири</Accordion.Header>
          <Accordion.Body>

            {ramanatha.map(video => (
              <div key={video.url} className='video-container'>
                <h6 className='video-title'>{video.title}</h6>
                <ReactPlayer
                  className='react-player'
                  light
                  url={video.url}
                  playIcon={<img src={playing} alt='playing' width='70' />}
                  controls
                  playing
                  width='100%'
                  height='40vh'
                />
              </div>
            ))}

          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="3">
          <Accordion.Header>Адимата Гири</Accordion.Header>
          <Accordion.Body>

            {adimata.map(video => (
              <div key={video.url} className='video-container'>
                <h6 className='video-title'>{video.title}</h6>
                <ReactPlayer
                  className='react-player'
                  light
                  url={video.url}
                  playIcon={<img src={playing} alt='playing' width='70' />}
                  controls
                  playing
                  width='100%'
                  height='40vh'
                />
              </div>
            ))}

          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="4">
          <Accordion.Header>Махешвари Гири</Accordion.Header>
          <Accordion.Body>

            {maheshvari.map(video => (
              <div key={video.url} className='video-container'>
                <h6 className='video-title'>{video.title}</h6>
                <ReactPlayer
                  className='react-player'
                  light
                  url={video.url}
                  playIcon={<img src={playing} alt='playing' width='70' />}
                  controls
                  playing
                  width='100%'
                  height='40vh'
                />
              </div>
            ))}

          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Аравиндини Гири</Accordion.Header>
          <Accordion.Body>

            {aravindini.map(video => (
              <div key={video.url} className='video-container'>
                <h6 className='video-title'>{video.title}</h6>
                <ReactPlayer
                  className='react-player'
                  light
                  url={video.url}
                  playIcon={<img src={playing} alt='playing' width='70' />}
                  controls
                  playing
                  width='100%'
                  height='40vh'
                />
              </div>
            ))}

          </Accordion.Body>
        </Accordion.Item>

      </Accordion>

      <br />
      <Image src='https://media.giphy.com/media/maYI2NHuFi1idHwvFb/giphy.gif' className='gifka' />

    </Container >

  )
}

export default VideoSMonahami