import { Container, Accordion, Image } from 'react-bootstrap'
import { myVideoHatha, myVideoPranayama, myVideoNidra, myVideoLectures } from '../helpers/MyVideos'
import YoutubePlayer from '../helpers/YoutubePlayer'
import '../styles/Gif.css'
import '../styles/Slider.css'
import '../styles/Video.css'

const MyVideo = () => {

  return (
    <Container>
      <h1 className='title'>Мои видео</h1>
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Хатха йога</Accordion.Header>
          <Accordion.Body>
            <YoutubePlayer videoHub={myVideoHatha} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Пранаяма и Кундалини йога</Accordion.Header>
          <Accordion.Body>
            <YoutubePlayer videoHub={myVideoPranayama} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Нидра йога</Accordion.Header>
          <Accordion.Body>
            <YoutubePlayer videoHub={myVideoNidra} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Лекции и выступления</Accordion.Header>
          <Accordion.Body>
            <YoutubePlayer videoHub={myVideoLectures} />
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>

      <br />
      <div className='gif-center'>
        <Image src='https://media.giphy.com/media/Pz0CYaHBmIQvbMaRTh/giphy.gif' className='gifka' />
      </div>

    </Container >
  )
}

export default MyVideo