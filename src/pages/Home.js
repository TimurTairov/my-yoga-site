import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Image } from 'react-bootstrap'
import { IoCheckmarkDone } from "react-icons/io5";
import myPhoto from '../images/myphoto.jpg'
import namaste from '../images/eid-96.png'
import om from '../images/icons8-om-96.png'
import shiva from '../images/icons8-shiva-dance-67.png'
import yog1 from '../images/yog2.png'
import yog2 from '../images/yog1.png'
import yog3 from '../images/yog3.png'
import yog4 from '../images/yog4.png'

import '../styles/Home.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='home'>
      <Container className="flex-container">

        <header className="flex-header mt-5">
          <div className="flex-img mt-5 mb-5">
            <Image src={myPhoto} className="home-img" />
          </div>

          <h3>
            <Image src={om} className='home-gif' />
            <b>Намасте</b>
            <Image src={namaste} className='home-gif' />
            <br /> Вас приветствует <b className='home-title'>Тиртхадева</b> <br />
          </h3>
          <h3> В миру <b>Тимур Таиров</b></h3>
        </header>

        <main className="mt-5">

          <div className='home-container'>
            <h5>
              <IoCheckmarkDone className='me-2 home-done' />
              Ученик просветленного мастера
            </h5>
            <h5>
              <IoCheckmarkDone className='me-2 home-done' />
              Преподаватель Йоги и Медитации
            </h5>
            <h5>
              <IoCheckmarkDone className='me-2 home-done' />
              Ваш наставник на пути Йоги и Дхармы
            </h5>
          </div>

          <h4 className="home-title mt-5 d-flex justify-content-center"><b>Моя миссия:</b></h4>

          <div className='home-container'>
            <h5>
              <IoCheckmarkDone className='me-2 home-done' />
              Cлужение Высшим идеалам йоги (Гуру, Дхарме и Cангхе)
            </h5>
            <h5>
              <IoCheckmarkDone className='me-2 home-done' />
              Помощь всем живым существам в преодолении неведения
            </h5>
            <h5>
              <IoCheckmarkDone className='me-2 home-done' />
              Распространение истинных знаний йоги <br />
            </h5>
          </div>

          <div className='home-flex-item mt-5 mb-5'>
            <Button className='flat-btn' variant='flat' onClick={() => navigate('education')}>О себе</Button>
            <Button className='flat-btn' variant='flat' onClick={() => navigate('contacts')}>Контакты</Button>
            <Button className='flat-btn' variant='flat' onClick={() => navigate('schedule')}>Расписание</Button>
            <Button className='flat-btn' variant='flat' onClick={() => navigate('master')}>Мастер</Button>
            <Button className='flat-btn' variant='flat' onClick={() => navigate('master')}>Традиция</Button>
            <Button className='flat-btn' variant='flat' onClick={() => navigate('myvideo')}>Мои видео</Button>
          </div>

          <div className='mb-5'></div>
          <div className='d-flex justify-content-between mt-5'>
            <Image src={yog1} className='yoga' />
            <Image src={yog2} className='yoga' />
            <Image src={shiva} className='yoga' />
            <Image src={yog3} className='yoga' />
            <Image src={yog4} className='yoga' />
          </div>
          {/* <Image src='https://media.giphy.com/media/8z9awszUWQHlzRjlxQ/giphy.gif' className='home-main-gif mt-5' /> */}
        </main>
      </Container >
    </div>
  )
}

export default Home
