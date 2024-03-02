import { Container, Image, Navbar } from "react-bootstrap"
import '../styles/MyFooter.css'
import vk from '../img/VK.png'
import tg from '../img/tg.png'
import insta from '../img/instagram.png'
import youtube from '../img/youtube.png'
import trishula from '../images/emblem_64x64.png'

const MyFooter = () => {
  return (

    <footer className="my-footer">
      <Container fluid className="footer-container">
        <div className="row">

          <div className="col-md-3 col-6 footer-content">
            <h5>ссылки на соц.сети</h5>
            <div className="footer-icons">
              <a href='https://vk.com/tirthadeva' target='_blank' rel='noreferrer'>
                <Image src={vk} className='small-gif' />Vkontakte
              </a>

              <a href='https://www.instagram.com/timur_brahmachari/' target='_blank' rel='noreferrer'>
                <Image src={insta} className='small-gif' />Instagram
              </a>

              <a href='https://www.youtube.com/@tirthadeva_yoga' target="_blank" rel="noreferrer">
                <Image src={youtube} className='small-gif' />YouTube
              </a>

              <a href='https://t.me/mdc_ShaktiMa' target='_blank' rel='noreferrer'>
                <Image src={tg} className='small-gif' />Tg ShaktiMa
              </a>
            </div>
          </div>

          <div className="col-md-3 col-6 footer-content">
            <h5>Тиртхадева</h5>
            <p className='footer-h5'>© All Rights Reserved 2024™</p>
            <p className='footer-h5'>Om Namah Shivaya</p>
            <Image src={trishula} className="icon" />


          </div>

        </div>

      </Container >
    </footer>

  )
}

export default MyFooter