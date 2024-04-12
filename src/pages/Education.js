import React from 'react'
import { Container, Image } from 'react-bootstrap'
import sun from '../gif/sun.gif'
import krishna from '../gif/Krisna.gif'
import '../styles/Gif.css'
import Menu from '../components/Menu'

const Education = () => {

  return (
    <Container>
      <h1 className='tittle'>Образование</h1>
      <h5 className='text-muted'>
        <Image src={sun} className='medium-gif' />
        <b>Основное образование</b>  <br />
        <b>1.</b> ВВИА им. проф. Н.Е.Жуковского, АСУ (2003-2008 гг). <br />
        <b>2.</b> МИРБИС, финансы и кредит (2008-2011 гг). <br />
        <br />
        <Image src={sun} className='medium-gif' />
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
        <Image src={sun} className='medium-gif' />
        <b>Неформальное обучение</b><br />
        - 2015 г. - обучение йоги у <a href='http://yogagu.ru/' target='_blank' rel="noreferrer">Виктора Кожаринова </a> (ученик Сатьянанда Сарасвати, Бихарская школа йоги). Неформально в поездках по Индии и в Москве. <br />
        - 2018 г. - обучение крийя йоге в традициии йоги Рамайяхи. Ведущий  Святослав Дубянский. <br />
        - 2019 г. - обучение Кундалини йоге с Учителем из Варанаси (Индия) Satayanand Giri (Lali Baba). <br />
        <br />
        <b>Ps:</b> в сентябре 2023 года получил дикшу и духовное имя - Тирхадева (посвящение) у своего коренного <a href='/master'>Гуру</a>.<br />
        До этого носил имя Тимур Брахмачари.
        <br /> <br />
      </h5>

      <Image src={krishna} className='giphy' />

    </Container>
  )
}

export default Education