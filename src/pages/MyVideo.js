import ReactPlayer from 'react-player/youtube'
import { Container, Accordion, Image } from 'react-bootstrap'
import { myVideoHatha, myVideoPranayama, myVideoNidra, myVideoLectures } from '../helpers/MyVideos'
import playing from '../img/youtube2.png'
import '../styles/Gif.css'
import '../styles/Slider.css'

const MyVideo = () => {

  return (
    <Container>
      <h1 className='title'>Мои видео</h1>
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Хатха йога</Accordion.Header>
          <Accordion.Body>

            {myVideoHatha.map(video => (
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
          <Accordion.Header>Пранаяма и Кундалини йога</Accordion.Header>
          <Accordion.Body>
            {myVideoPranayama.map(video => (
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
          <Accordion.Header>Нидра йога</Accordion.Header>
          <Accordion.Body>
            {myVideoNidra.map(video => (
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
          <Accordion.Header>Лекции и выступления</Accordion.Header>
          <Accordion.Body>
            {myVideoLectures.map(video => (
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

      <Image src='https://media.giphy.com/media/Pz0CYaHBmIQvbMaRTh/giphy.gif' className='gifka' />

    </Container >
  )
}

export default MyVideo