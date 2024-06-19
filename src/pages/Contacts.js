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


const Contacts = () => {
  return (
    <div className='contacts'>
      <Container>
        <h1 className="title mb-5 d-flex justify-content-center">Контакты</h1>
        <ul className='flex-container-contacts'>
          <li className='flex-item'>
            <div className='contacts-container'>
              <Image src={location} className='contacts-img'></Image>
              <h3 className='mx-2'> Локация</h3>
            </div>
            <p>РФ, Москва. М. Новокосино.</p>
          </li>

          <li className='flex-item'>
            <div className='contacts-container'>
              <Image src={whatsapp} className='contacts-img'></Image>
              <h3 className='mx-2'> WhatsApp</h3>
            </div>
            <p>
              <a href="whatsapp://send?phone=79672067710" target='_blank'
                rel='noreferrer' className='contactsLink'>+7 (967) 206-77-10</a>
            </p>
          </li>

          <li className='flex-item'>
            <div className='contacts-container'>
              <Image src={tg} className='contacts-img'></Image>
              <h3 className='mx-2'> Telegram</h3>
            </div>
            <p>
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
              <Image src={vk} className='contacts-img'></Image>
              <h3 className='mx-2'> VK</h3>
            </div>
            <p>
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
              <Image src={insta} className='contacts-img'></Image>
              <h3 className='mx-2'> Instagram</h3>
            </div>
            <p>
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
              <Image src={email} className='contacts-img'></Image>
              <h3 className='mx-2'> Email</h3>
            </div>
            <p>
              <a href='mailto:tairovtk@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='contactsLink'
              >tairovtk@gmail.com</a>
            </p>
          </li>

          <li className='flex-item'>
            <div className='contacts-container'>
              <Image src={youtube} className='contacts-img'></Image>
              <h3 className='mx-2'> YouTube</h3>
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
              <Image src={skype} className='contacts-img'></Image>
              <h3 className='mx-2'>Skype</h3>
            </div>
            <p>t1m1985</p>
          </li>



        </ul>
        <Image src={shivaLingam} className='contacts-gif' />
      </Container>
    </div>
  )
}

export default Contacts
