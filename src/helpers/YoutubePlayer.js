import ReactPlayer from 'react-player/youtube'
import playing from '../img/youtube2.png'
import '../styles/Video.css'

const YoutubePlayer = (props) => {


  return (
    <div>
      {props.videoHub.map(video => (
        <div key={video.url} className='video-container'>
          <h6 className='video-title'>{video.title}</h6>
          <ReactPlayer
            key={video.url}
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
    </div>
  )
}

export default YoutubePlayer