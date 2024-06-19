import React from 'react'
import { Container } from 'react-bootstrap'
import MyCarousel from '../helpers/MyCarousel'
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
import '../styles/Certificates.css'

const Certificates = () => {
  const fotos = [img1, img2, img3, img4, img4, img5, img6, img7, img8, img9, img10, img11, img12]
  return (
    <div className='certificates'>
      <Container className='main-container'>
        <h1 className="title mb-5 d-flex justify-content-center">Сертификаты</h1>
        <MyCarousel fotos={fotos} />
      </Container>
    </div>
  )
}

export default Certificates
