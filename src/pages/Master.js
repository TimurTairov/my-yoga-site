import React from 'react'
import { Button, Carousel, Container, Image } from 'react-bootstrap'
import img1 from '../images/Guru/001.jpg'
import img2 from '../images/Guru/002.jpg'


const Master = () => {
  return (
    <Container>
      <h1 className='tittle'>Шри Гуру Свами Вишнудевананда Гири</h1>

      <Image src={img1} className='slider-guru'></Image>
      <h5 className='text-muted'>
        <b className='my-name'>Свами Вишнудевананда Гири</b> (до 2010 г. — Сатгуру Свами Вишну Дэв) — русскоязычный духовный учитель (гуру, имеющий полномочия инициировать в санньясу),
        садху, реализованный мастер-джняни в традиции Адвайта-веданты и йоги; философ, теолог, писатель, паломник-путешественник, имеющий учеников по всему миру. <br />
        • Проповедует Санатана Дхарму и путь практической Адвайта-веданты по всему миру (в том числе в СНГ, Евросоюзе, США, Индии, Непале, Индонезии).<br />
        • Обучает Джняна-йоге, Раджа-йоге, Бхакти-йоге, Карма-йоге, Кундалини-йоге, Лайя-йоге, учениям Адвайта-веданте и Ануттара-тантры сиддхов.<br />
        • В 2010 году на мировом фестивале Кумбха Мела в г. Харидваре (Индия), Сатгуру Свами Вишну Дэв принял статус санньяси и духовное имя
        (Свами Вишнудевананда Гири) от Махамандалешвара ордена Джуна Акхары — Сомнатха Гири Махараджа (святого махайоги Пайлот Бабаджи)
        и статус Махамандалешвара от ачарьи-махамандалешвара Шри Свами Авдешананды Гири в монашеском ордене Джуна Акхара, основанном Шри Ади Шанкарачарьей.<br />
        • Свами родился в 1967 году в СССР, на территории Украины.<br />
        • Духовную практику, медитацию Свами начал самостоятельно практиковать в возрасте 6 лет, опираясь на интуитивную память прошлого (прошлых реинкарнаций).<br />
        • Свами принял Санатана Дхарму как свой путь и вероисповедание в 19 лет. • Свами провел несколько уединенных затворов (ритритов), выполняя суровую аскезу (тапасью) йоги. В результате последнего ритрита, который длился 3 года, Свами в 1993-1995 гг. реализовал самадхи и достиг просветления.<br />
        • С 1995 года Свами проповедует Санатана Дхарму, учения Адвайта-веданты и Ануттара-тантры.<br />
        <br />
        Более подробная биография мастера  <a href='https://www.advayta.org/master/biografiya-mastera/' target='_blank' rel='noreferrer'>здесь</a>
        <br />
      </h5>
      <Image src={img2} className='slider-guru'></Image>
    </Container>
  )
}

export default Master