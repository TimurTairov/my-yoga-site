import { Carousel } from 'react-bootstrap'
import '../styles/Slider.css'

const MyCarousel = (props) => {
  return (
    <div>
      <Carousel slide fade touch
        data-bs-theme="dark"
      // nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
      // prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon changed" />}
      >
        {
          props.fotos.map(foto => (
            <Carousel.Item className='d-flex justify-content-center'>
              <img
                className="slider-img"
                src={foto}
                alt="foto"
              />
            </Carousel.Item>
          ))
        }

      </Carousel>
    </div>
  )
}

export default MyCarousel