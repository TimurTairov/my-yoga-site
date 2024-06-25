import ReactPlayer from 'react-player/youtube'
import playing from '../img/youtube2.png'
import '../styles/Video.css'

const YoutubePlayer = (props) => {


  return (
    <div className='video-container'>
      {props.videoHub.map(video => (
        <card key={video.url} className='video-card'>

          <ReactPlayer
            key={video.url}
            className='react-player'
            light
            url={video.url}
            playIcon={<img src={playing} alt='playing' width={'40px'} />}
            controls
            playing
            width='auto'
            height='200px'
          />
          <p className='video-title'>{video.title}</p>
        </card>
      ))}
    </div>
  )
}

export default YoutubePlayer