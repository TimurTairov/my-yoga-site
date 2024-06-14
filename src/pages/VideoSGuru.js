import ReactPlayer from 'react-player/youtube'
import { Container, Accordion, Image } from 'react-bootstrap'
import { oldVideos, satsang, sadhuLectures, smallLectures, questions, atmaVichara, practicalQuestions } from '../helpers/GuruVideos'
import playing from '../img/youtube2.png'
import '../styles/Gif.css'
import '../styles/Slider.css'
import '../styles/Video.css'

const VideoSGuru = () => {
  return (
    <Container>
      <h1 className='title'>Видео с Гуру</h1>

      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Интервью и старые лекции</Accordion.Header>
          <Accordion.Body>

            {oldVideos.map(video => (
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
          <Accordion.Header>Сатсанги</Accordion.Header>
          <Accordion.Body>

            {satsang.map(video => (
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
          <Accordion.Header>Серия мини лекций о садху</Accordion.Header>
          <Accordion.Body>

            {sadhuLectures.map(video => (
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
          <Accordion.Header>Короткие лекции</Accordion.Header>
          <Accordion.Body>

            {smallLectures.map(video => (
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
          <Accordion.Header>Ответы на вопросы практикующих</Accordion.Header>
          <Accordion.Body>

            {questions.map(video => (
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
          <Accordion.Header>О практике Атма Вичара</Accordion.Header>
          <Accordion.Body>

            {atmaVichara.map(video => (
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

        <Accordion.Item eventKey="6">
          <Accordion.Header>Практические вопросы</Accordion.Header>
          <Accordion.Body>

            {practicalQuestions.map(video => (
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
      <Image
        src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3EzaHU2MXFxN2k2MDU1bmM0ZXBsZnA3eDJ6amtpZzhka2V3bGVjZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aTVnX5ckXuWBoDDtCQ/giphy.gif'
        className='gifka'
      />
    </Container >
  )
}

export default VideoSGuru