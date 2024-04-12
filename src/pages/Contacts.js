import { Container, Image } from 'react-bootstrap'
import location from '../img/Location2.png'
import whatsapp from '../img/whatsapp.png'
import vk from '../img/VK.png'
import tg from '../img/tg.png'
import insta from '../img/instagram.png'
import email from '../img/email.png'
import youtube from '../img/youtube.png'
import skype from '../img/icons8-skype-96.png'
import shivaLingam from '../gif/mahadev-adoration-to-shiva.gif'
import '../styles/Contacts.css'
import '../styles/Gif.css'

const Contacts = () => {
  return (
    <Container>
      <h1 className='title'>Контакты</h1>
      <ul className='flex-container-contacts'>
        <li className='flex-item'>
          <div className='contacts-container'>
            <Image src={location} className='img'></Image>
            <h3 className='text-muted'> Локация</h3>
          </div>
          <p className='text-muted'>РФ, Москва. Метро Новокосино.</p>
        </li>

        <li className='flex-item'>
          <div className='contacts-container'>
            <Image src={whatsapp} className='img'></Image>
            <h3 className='text-muted'> WhatsApp</h3>
          </div>
          <p className='text-muted'>
            <a href="whatsapp://send?phone=79672067710" target='_blank'
              rel='noreferrer' className='contactsLink'>+7 (967) 206-77-10</a>
          </p>
        </li>

        <li className='flex-item'>
          <div className='contacts-container'>
            <Image src={tg} className='img'></Image>
            <h3 className='text-muted'> Telegram</h3>
          </div>
          <p className='text-muted'>
            <a href='https://t.me/tirthadeva'
              target='_blank'
              rel='noreferrer'
              className='contactsLink'
            >
              @tirthadeva
            </a>
          </p>
        </li>

        <li className='flex-item'>
          <div className='contacts-container'>
            <Image src={vk} className='img'></Image>
            <h3 className='text-muted'> VK</h3>
          </div>
          <p className='text-muted'>
            <a href='https://vk.com/tirthadeva'
              target='_blank'
              rel='noreferrer'
              className='contactsLink'
            >
              @tirthadeva
            </a>
          </p>
        </li>

        <li className='flex-item'>
          <div className='contacts-container'>
            <Image src={insta} className='img'></Image>
            <h3 className='text-muted'> Instagram</h3>
          </div>
          <p className='text-muted'>
            <a href='https://www.instagram.com/timur_brahmachari/'
              target='_blank'
              rel='noreferrer'
              className='contactsLink'
            >
              @timur_brahmachari
            </a>
          </p>
        </li>

        <li className='flex-item'>
          <div className='contacts-container'>
            <Image src={email} className='img'></Image>
            <h3 className='text-muted'> Email</h3>
          </div>
          <p className='text-muted'>
            <a href='mailto:tairovtk@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='contactsLink'
            >tairovtk@gmail.com</a>
          </p>
        </li>

        <li className='flex-item'>
          <div className='contacts-container'>
            <Image src={youtube} className='img'></Image>
            <h3 className='text-muted'> YouTube</h3>
          </div>
          <p className='text-muted'>
            <a href='https://www.youtube.com/@tirthadeva_yoga'
              target="_blank"
              rel="noreferrer"
              className='contactsLink'
            >
              @tirthadeva_yoga
            </a>
          </p>
        </li>

        <li className='flex-item'>
          <div className='contacts-container'>
            <Image src={skype} className='img'></Image>
            <h3 className='text-muted'> Skype</h3>
          </div>
          <p className='text-muted'>t1m1985</p>
        </li>

        {/* <Image src='https://media.giphy.com/media/8z9awszUWQHlzRjlxQ/giphy.gif' className='medium-gif2' /> */}

      </ul>
      <Image src={shivaLingam} className='giphy' />
    </Container>
  )
}

export default Contacts
