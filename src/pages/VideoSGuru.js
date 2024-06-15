import { Container, Accordion, Image } from 'react-bootstrap'
import { oldVideos, satsang, sadhuLectures, smallLectures, questions, atmaVichara, practicalQuestions } from '../helpers/GuruVideos'
import YoutubePlayer from '../helpers/YoutubePlayer'
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
            <YoutubePlayer videoHub={oldVideos} />
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="1">
          <Accordion.Header>Сатсанги</Accordion.Header>
          <Accordion.Body>
            <YoutubePlayer videoHub={satsang} />
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="2">
          <Accordion.Header>Серия мини лекций о садху</Accordion.Header>
          <Accordion.Body>
            <YoutubePlayer videoHub={sadhuLectures} />
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="3">
          <Accordion.Header>Короткие лекции</Accordion.Header>
          <Accordion.Body>
            <YoutubePlayer videoHub={smallLectures} />
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="4">
          <Accordion.Header>Ответы на вопросы практикующих</Accordion.Header>
          <Accordion.Body>
            <YoutubePlayer videoHub={questions} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>О практике Атма Вичара</Accordion.Header>
          <Accordion.Body>
            <YoutubePlayer videoHub={atmaVichara} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>Практические вопросы</Accordion.Header>
          <Accordion.Body>
            <YoutubePlayer videoHub={practicalQuestions} />
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