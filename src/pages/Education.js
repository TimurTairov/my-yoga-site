import React from 'react'
import { Container, Image } from 'react-bootstrap'
import MyCarousel from '../helpers/MyCarousel'
import sun from '../gif/sun.gif'
import '../styles/Gif.css'
import img1 from '../images/Ucheba/001.jpg'
import img2 from '../images/Ucheba/002.jpg'
import img3 from '../images/Ucheba/003.jpg'
import img4 from '../images/Ucheba/004.jpg'
import img5 from '../images/Ucheba/005.jpg'
import img6 from '../images/Ucheba/006.jpg'
import img7 from '../images/Ucheba/007.jpg'
import img8 from '../images/Ucheba/008.jpg'
import img9 from '../images/Ucheba/009.jpg'
import img10 from '../images/Ucheba/010.jpg'
import img11 from '../images/Ucheba/011.jpg'
import img12 from '../images/Ucheba/012.jpg'
import img13 from '../images/Ucheba/013.jpg'
import img14 from '../images/Ucheba/014.jpg'
import img15 from '../images/Ucheba/015.jpg'
import img16 from '../images/Ucheba/016.jpg'
import img17 from '../images/Ucheba/017.jpg'
import img18 from '../images/Ucheba/018.jpg'
import img19 from '../images/Ucheba/019.jpg'
import img20 from '../images/Ucheba/020.jpg'
import img21 from '../images/Ucheba/021.jpg'


const Education = () => {

  const fotos = [img1, img2, img3, img4, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21]
  return (
    <Container>
      <h1 className='title'>Образование</h1>
      <h5 className='text-muted'>
        <Image src={sun} className='small-gif ' />
        <b>Основное образование</b>  <br />
        <b>1.</b> ВВИА им. проф. Н.Е.Жуковского, АСУ (2003-2008 гг). <br />
        <b>2.</b> МИРБИС, финансы и кредит (2008-2011 гг). <br />
        <br />
        <Image src={sun} className='small-gif ' />
        <b>Образование в йоге</b> <br />
        <b>1.</b> 2013-2017 гг. - <a href='https://openyoga.ru/' target='_blank' rel="noreferrer">(МОЙУ)</a> Международный открытый йога университет. Обучение по направлениям - хатха йога, крийя, мантра, пранаяма, а также прохождение более 50 семинаров и ритритов, в том числе в Индии и Непале. <br />
        <b>2.</b> 2020 г. - <a href='https://yogatechnology.ru/' target='_blank' rel="noreferrer">Высшая школа йога технологий.</a> Обучающий курс "Инструктор йоги в гамаках". <br />
        <b>3.</b> 2021 г. - по н.в. - <a href='https://www.advayta.org' target='_blank' rel="noreferrer">(ВОСД)</a> Всемирная община Санатана Дхармы. Обучение йоги в традиции Адвайта сиддхов. <br />
        - Хатха йога, кундалини йога, медитация, созерцание <br />
        - Джняна и лайя йога <br />
        - Ритуальная практика (Бхаджан мандала, сутра, хома, пуджа, абхишека) <br />
        - Философия Адвайта Веданты и йоги сиддхов <br />
        - Ритритная практика в Ашраме <br />
        <br />
        <Image src={sun} className='small-gif ' />
        <b>Неформальное обучение</b><br />
        - 2015 г. - обучение йоги у <a href='http://yogagu.ru/' target='_blank' rel="noreferrer">Виктора Кожаринова </a> (ученик Сатьянанда Сарасвати, Бихарская школа йоги). Неформально в поездках по Индии и в Москве. <br />
        - 2018 г. - обучение крийя йоге в традициии йоги Рамайяхи. Ведущий  Святослав Дубянский. <br />
        - 2019 г. - обучение Кундалини йоге с Учителем из Варанаси (Индия) Satayanand Giri (Lali Baba). <br />
        <br />
        <b>Ps:</b> в сентябре 2023 года получил дикшу и духовное имя - Тирхадева (посвящение) у своего коренного <a href='/master'>Гуру</a>.<br />
        До этого носил имя Тимур Брахмачари.
        <br /> <br />
      </h5>

      <MyCarousel fotos={fotos} />

    </Container>
  )
}

export default Education