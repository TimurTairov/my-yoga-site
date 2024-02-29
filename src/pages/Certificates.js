import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import img1 from '../images/Certificates/001.jpg'
import img2 from '../images/Certificates/002.jpg'
import img3 from '../images/Certificates/003.jpg'
import img4 from '../images/Certificates/004.jpg'
import img5 from '../images/Certificates/005.jpg'
import img6 from '../images/Certificates/006.jpg'
import img7 from '../images/Certificates/007.jpg'
import img8 from '../images/Certificates/008.jpg'
import img9 from '../images/Certificates/009.jpg'
import img10 from '../images/Certificates/010.jpg'
import img11 from '../images/Certificates/011.jpg'
import img12 from '../images/Certificates/012.jpg'


import '../styles/Slider.css'

const Certificates = () => {
  return (
    <Container className='main-container'>
      <h1 className='tittle'>Сертификаты и памятные листы</h1>
      <Carousel slide fade data-bs-theme="dark">
        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className='certificate-slider'
            src={img1}
            alt="img1"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="certificate-slider"
            src={img2}
            alt="img2"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="certificate-slider"
            src={img3}
            alt="img3"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="certificate-slider"
            src={img4}
            alt="img4"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="certificate-slider"
            src={img5}
            alt="img5"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="certificate-slider"
            src={img6}
            alt="img6"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="certificate-slider"
            src={img7}
            alt="img7"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="certificate-slider"
            src={img8}
            alt="img8"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="certificate-slider"
            src={img9}
            alt="img9"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="certificate-slider"
            src={img10}
            alt="img10"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="certificate-slider"
            src={img11}
            alt="img11"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="certificate-slider"
            src={img12}
            alt="img12"
          />
        </Carousel.Item>

      </Carousel>
    </Container>
  )
}

export default Certificates
