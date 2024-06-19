import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { TbWorldWww } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaOdnoklassnikiSquare } from "react-icons/fa";
import '../styles/Links.css'

const Links = () => {
  return (
    <div className='Links'>
      <Container>
        <h1 className="title mb-5 d-flex justify-content-center">Полезные ссылки</h1>
        <p>
          <TbWorldWww className='me-2 mb-1' color='orange' />
          <a href='https://www.advayta.org/' target='_blank' rel='noreferrer' className='links'>advayta.org</a>   <br />
          Официальный сайт. Здесь более подробная информация о традиции, Гуру, мероприятиях, обучении,
          а также книги, лекции, статьи и многое другое.
        </p>
        <p>
          <TbWorldWww className='me-2 mb-1' color='orange' />
          <a href='https://institute-vasishtha.com/' target='_blank' rel='noreferrer' className='links'>Интститут Риши Васиштхи </a>   <br />
          Этот портал для тех, кто хочет больше узнать о духовной культуре и философии Санатана Дхармы, для тех,
          кто хочет глубоко исследовать различные направления йоги, для тех, кто хочет открыть для себя богатое
          культурное и философское наследие индуизма. Пройдя последовательно 12 курсов, можно получить теоретические знания
          в области Санатана Дхармы, а также научиться применять их на практике.
        </p>
        <p>
          <TbWorldWww className='me-2 mb-1' color='orange' />
          <a href='http://ramanatha.advayta.org/' target='_blank' rel='noreferrer' className='links'>Рупор Дхармы </a>   <br />
          Сайт монаха Раманатха Гири.
        </p>
        <p>
          <TbWorldWww className='me-2 mb-1' color='orange' />
          <a href='https://sharanam.advayta.org/' target='_blank' rel='noreferrer' className='links'>ПРИБЕЖИЩЕ в линии передачи Свами Вишнудевананда Гири </a>   <br />
          Здесь вы найдете информацию о вступлении
          в традицию адвайта сиддхов, о предварительных практиках и предстоящих онлайн церемониях принятия Прибежища.
        </p>
        <p>
          <TbWorldWww className='me-2 mb-1' color='orange' />
          <a href='https://vosdlife.org/' target='_blank' rel='noreferrer' className='links'>Свет Дхармы </a>   <br />
          Сайт инструкторов ВОСД. Здесь Вы можете выбрать себе вводящего инструктора, который поможет Вам освоиться в традиции.
        </p>
        <p>
          <TbWorldWww className='me-2 mb-1' color='orange' />
          <a href='https://www.siddhashop.com/' target='_blank' rel='noreferrer' className='links'>Сиддха шоп </a>   <br />
          Интернет магазин. Здесь Вы можете заказать книги, мурти и предметы Дхармы с доставкой.
        </p>
        <p>
          <FaYoutube className='me-2 mb-1' color='red' />
          <a href='www.youtube.com/@vedicworld1' target='_blank' rel='noreferrer' className='links'>Vedic World  </a>   <br />
          Сатсанги и лекции Гуру по йоге и медитации.
        </p>
        <p>
          <FaYoutube className='me-2 mb-1' color='red' />
          <a href='https://www.youtube.com/@DharmaLight' target='_blank' rel='noreferrer' className='links'>Свет Дхармы  </a>   <br />
          Лекции и практики йоги от инструкторов ВОСД.
        </p>
        <p>
          <FaYoutube className='me-2 mb-1' color='red' />
          <a href='https://www.youtube.com/@Ramanatha' target='_blank' rel='noreferrer' className='links'>Раманатха Гири  </a>   <br />
          Видео лекции монаха Раманатха Гири.
        </p>
        <p>
          <FaTelegram className='me-2 mb-1' color='lightblue' />
          <a href='t.me/advayta_siddhov' target='_blank' rel='noreferrer' className='links'>Телеграм Адвайта сиддхов </a>   <br />
          Официальный телеграм Адвайта сиддхов.
        </p>
        <p>
          <FaTelegram className='me-2 mb-1' color='lightblue' />
          <a href='https://t.me/mdc_ShaktiMa' target='_blank' rel='noreferrer' className='links'>МДЦ ШактиМА </a>   <br />
          Канал Московского Дхарма Центра "ШактиМа". Мероприятия в г. Москва.
        </p>
        <p>
          <FaInstagram className='me-2 mb-1' color='violet' />
          <a href='instagram.com/advayta.siddhov.official' target='_blank' rel='noreferrer' className='links'>Инстаграм Адвайта сиддхов  </a>   <br />
          Официальный инстаграм Адвайта сиддхов.
        </p>
        <p>
          <SlSocialVkontakte className='me-2 mb-1' color='lightblue' />
          <a href='vk.com/advayta.siddhov' target='_blank' rel='noreferrer' className='links'>ВК Адвайта сиддхов </a>   <br />
          Официальная страница ВК Адвайта сиддхов.
        </p>
        <p>
          <FaOdnoklassnikiSquare className='me-2 mb-1' color='orange' />
          <a href='ok.ru/advayta.siddhov' target='_blank' rel='noreferrer' className='links'>ОК Адвайта сиддхов </a>   <br />
          Официальная страница ОК Адвайта сиддхов.
        </p>
        <Image src='https://media.giphy.com/media/dzJ0WT8bOGPFU0lTwz/giphy.gif' className='links-gif mt-5' />
      </Container>
    </div >

  )
}

export default Links