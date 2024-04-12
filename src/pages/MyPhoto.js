import { Container, Carousel } from 'react-bootstrap'
import img1 from '../images/MyPhoto/001.jpg'
import img2 from '../images/MyPhoto/002.jpg'
import img3 from '../images/MyPhoto/003.jpg'
import img4 from '../images/MyPhoto/004.jpg'
import img5 from '../images/MyPhoto/005.jpg'
import img6 from '../images/MyPhoto/006.jpg'
import img7 from '../images/MyPhoto/007.jpg'
import img8 from '../images/MyPhoto/008.jpg'
import img9 from '../images/MyPhoto/009.jpg'
import img10 from '../images/MyPhoto/010.jpg'
import img11 from '../images/MyPhoto/011.jpg'
import img12 from '../images/MyPhoto/012.jpg'
import img13 from '../images/MyPhoto/013.jpg'
import img14 from '../images/MyPhoto/014.jpg'
import img15 from '../images/MyPhoto/015.jpg'
import img16 from '../images/MyPhoto/016.jpg'
import img17 from '../images/MyPhoto/017.jpg'
import img18 from '../images/MyPhoto/018.jpg'
import img19 from '../images/MyPhoto/019.jpg'
import img20 from '../images/MyPhoto/020.jpg'

import '../styles/Slider.css'

const MyPhoto = () => {

  return (
    <Container className='main-container'>
      <h1 className="title">Мои фото</h1>

      <Carousel slide fade touch data-bs-theme="dark"
      // nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
      // prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon changed" />}
      >

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img1}
            alt="img1"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img2}
            alt="img2"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img3}
            alt="img3"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img4}
            alt="img4"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img5}
            alt="img5"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img6}
            alt="img6"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img7}
            alt="img7"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img8}
            alt="img8"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img9}
            alt="img9"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img10}
            alt="img10"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img11}
            alt="img11"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img12}
            alt="img12"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img13}
            alt="img13"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img14}
            alt="img14"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img15}
            alt="img15"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img16}
            alt="img16"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img17}
            alt="img17"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img18}
            alt="img18"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img19}
            alt="img19"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-img"
            src={img20}
            alt="img20"
          />
        </Carousel.Item>

      </Carousel>


    </Container>
  )
}

export default MyPhoto
