import { Container, Image } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import vk from '../img/VK.png'
import tg from '../img/tg.png'
import insta from '../img/instagram.png'
import youtube from '../img/youtube.png'
import trishula from '../images/emblem_64x64.png'
import '../styles/MyFooter.css'

const MyFooter = () => {
  return (

    <footer className="my-footer">
      <Container fluid className="footer-container">
        <div className="row">

          <div className="col-md-3 col-6 footer-content">
            <h5><NavLink to='.' end>На главную</NavLink></h5>
            <p className='footer-h5'>© All Rights Reserved 2024™</p>
            <p className='footer-h5'>Om Namah Shivaya</p>
            <Image src={trishula} className="icon" />
          </div>

          <div className="col-md-3 col-6 footer-content">
            <h5>О себе</h5>
            <div className="footer-icons">
              <NavLink to='education'>Образование</NavLink>
              <NavLink to='certificates'>Сертификаты</NavLink>
              <NavLink to='myphoto'>Мои фото</NavLink>
              <NavLink to='contacts'>Контакты</NavLink>
            </div>
          </div>

          <div className="col-md-3 col-6 footer-content">
            <h5>Йога</h5>
            <div className="footer-icons">
              <NavLink to='schedule'>Расписание</NavLink>
              <NavLink to='feedbacks'>Отзывы</NavLink>
              <NavLink to='basicrules'>Положения йоги</NavLink>
              <NavLink to='nauli'>Наули</NavLink>
            </div>
          </div>

          <div className="col-md-3 col-6 footer-content">
            <h5>Традиция</h5>
            <div className="footer-icons">
              <NavLink to='master'>Мастер</NavLink>
              <NavLink to='drevo-pribezhishcha'>Древо прибежища</NavLink>
              <NavLink to='metody'>Методы Учения</NavLink>
              <NavLink to='links'>полезные ссылки</NavLink>
            </div>
          </div>

          <div className="col-md-3 col-6 footer-content">
            <h5>Видео</h5>
            <div className="footer-icons">
              <NavLink to='myvideo'>Мои видео</NavLink>
              <NavLink to='videosguru'>Видео с Гуру</NavLink>
              <NavLink to='videosmonahami'>Видео с монахами</NavLink>

            </div>
          </div>

          <div className="col-md-3 col-6 footer-content">
            <h5>социальные сети</h5>
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


        </div>

      </Container >
    </footer >

  )
}

export default MyFooter