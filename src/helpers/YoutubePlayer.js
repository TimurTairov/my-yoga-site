import { Fragment } from 'react'
import ReactPlayer from 'react-player/youtube'
import playing from '../img/youtube2.png'


const YoutubePlayer = (videoHub) => {
  return (
    <div>
      {videoHub.map(video => (
        <Fragment key={video.url}>
          <ReactPlayer
            light
            url={video.url}
            playIcon={<img src={playing} alt='playing' width='70' />}
            controls
            playing
          />
          <h6>{video.title}</h6>
          <br />
        </Fragment>
      ))}
    </div>
  )
}

export default YoutubePlayer