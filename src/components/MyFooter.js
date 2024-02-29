import { Container, Image } from "react-bootstrap"
import '../styles/MyFooter.css'
import vk from '../img/VK.png'
import tg from '../img/tg.png'
import insta from '../img/insta.jpg'
import youtube from '../img/youtube.png'
import trishula from '../images/emblem_64x64.png'

const MyFooter = () => {
  return (
    <footer className="my-footer">
      <Container className="footer-container">
        <div className="container-item">
          <h5>ссылки на соц.сети</h5>

          <a href='https://vk.com/tirthadeva' target='_blank' rel='noreferrer'>
            <Image src={vk} className='small-gif' /> Vkontakte
          </a>

          <a href='https://www.instagram.com/timur_brahmachari/' target='_blank' rel='noreferrer'>
            <Image src={insta} className='small-gif' /> Instagram
          </a>

          <a href='https://www.youtube.com/@tirthadeva_yoga' target="_blank" rel="noreferrer">
            <Image src={youtube} className='small-gif' /> YouTube
          </a>

          <a href='https://t.me/mdc_ShaktiMa' target='_blank' rel='noreferrer'>
            <Image src={tg} className='small-gif' /> Tg ShaktiMa
          </a>

        </div>

        <div className="container-item">
          <h5>Тиртхадева</h5>
          <h6>© All Rights Reserved 2024™</h6>
          <h6>Om Namah Shivaya</h6>
          <Image src={trishula} className='gif' />
        </div>

        {/* <div className="container-item">

        </div> */}
      </Container >
    </footer>
  )
}

export default MyFooter