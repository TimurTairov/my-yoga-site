import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import website from '../img/site.gif'
import youtube from '../img/icons8-youtube.gif'
import instagram from '../img/instagram.gif'
import vk from '../img/vk.gif'
import ok from '../img/odnoklassniki.png'
import tg from '../img/telegram.gif'

const Links = () => {
  return (
    <Container>
      <h1 className='tittle'>Полезные ссылки</h1>
      <h5 className='text-muted'>
        <Image src={website} className='gif'></Image>
        <a href='https://www.advayta.org/' target='_blank' rel='noreferrer'>www.advayta.org </a>   <br />
        Официальный сайт. Здесь более подробная информация о традиции, Гуру, мероприятиях, обучении,
        а также книги, лекции, статьи и многое другое. <br />
        <br />
        <Image src={website} className='gif'></Image>
        <a href='https://institute-vasishtha.com/' target='_blank' rel='noreferrer'>Интститут Риши Васиштхи </a>   <br />
        Этот портал для тех, кто хочет больше узнать о духовной культуре и философии Санатана Дхармы, для тех,
        кто хочет глубоко исследовать различные направления йоги, для тех, кто хочет открыть для себя богатое
        культурное и философское наследие индуизма. Пройдя последовательно 12 курсов, можно получить теоретические знания
        в области Санатана Дхармы, а также научиться применять их на практике.  <br />
        <br />
        <Image src={website} className='gif'></Image>
        <a href='http://ramanatha.advayta.org/' target='_blank' rel='noreferrer'>Рупор Дхармы </a>   <br />
        Сайт монаха Раманатха Гири.<br />
        <br />
        <Image src={website} className='gif'></Image>
        <a href='https://sharanam.advayta.org/' target='_blank' rel='noreferrer'>ПРИБЕЖИЩЕ в линии передачи Свами Вишнудевананда Гири </a>   <br />
        Здесь вы найдете информацию о вступлении
        в традицию адвайты сиддхов, о предварительных практиках и предстоящих онлайн церемониях принятия Прибежища.<br />
        <br />
        <Image src={website} className='gif'></Image>
        <a href='https://vosdlife.org/' target='_blank' rel='noreferrer'>Свет Дхармы </a>   <br />
        Сайт инструкторов ВОСД. Здесь Вы можете выбрать себе вводящего инструктора, который поможет Вам освоиться в традиции.<br />
        <br />
        <Image src={website} className='gif'></Image>
        <a href='https://www.siddhashop.com/' target='_blank' rel='noreferrer'>Сиддха шоп </a>   <br />
        Интернет магазин. Здесь Вы можете заказать книги, мурти и предметы Дхармы с доставкой.<br />
        <br />
        <Image src={youtube} className='gif'></Image>
        <a href='www.youtube.com/@vedicworld1' target='_blank' rel='noreferrer'>Vedic World  </a>   <br />
        Сатсанги и лекции Гуру по йоге и медитации.<br />
        <br />
        <Image src={youtube} className='gif'></Image>
        <a href='https://www.youtube.com/@DharmaLight' target='_blank' rel='noreferrer'>Свет Дхармы  </a>   <br />
        Лекции и практики йоги от инструкторов ВОСД.<br />
        <br />
        <Image src={youtube} className='gif'></Image>
        <a href='https://www.youtube.com/@Ramanatha' target='_blank' rel='noreferrer'>Раманатха Гири  </a>   <br />
        Лекции монаха Раманатха Гири.<br />
        <br />
        <Image src={tg} className='gif'></Image>
        <a href='t.me/advayta_siddhov' target='_blank' rel='noreferrer'>Телеграм Адвайта сиддхов </a>   <br />
        Официальный телеграм Адвайта сиддхов. <br />
        <br />
        <Image src={tg} className='gif'></Image>
        <a href='https://t.me/mdc_ShaktiMa' target='_blank' rel='noreferrer'>МДЦ ШактиМА </a>   <br />
        Канал Московского Дхарма Центра "ШактиМа". Мероприятия в г. Москва. <br />
        <br />
        <Image src={instagram} className='gif'></Image>
        <a href='instagram.com/advayta.siddhov.official' target='_blank' rel='noreferrer'>Инстаграм Адвайта сиддхов  </a>   <br />
        Официальный инстаграм Адвайта сиддхов. <br />
        <br />
        <Image src={vk} className='gif'></Image>
        <a href='vk.com/advayta.siddhov' target='_blank' rel='noreferrer'>ВК Адвайта сиддхов </a>   <br />
        Официальная страница ВК Адвайта сиддхов. <br />
        <br />
        <Image src={ok} className='gif'></Image>
        <a href='ok.ru/advayta.siddhov' target='_blank' rel='noreferrer'>ОК Адвайта сиддхов </a>   <br />
        Официальная страница ОК Адвайта сиддхов. <br />
        <br />
      </h5>

    </Container>
  )
}

export default Links