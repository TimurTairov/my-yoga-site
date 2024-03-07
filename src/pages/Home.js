import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Image } from 'react-bootstrap'
import myPhoto from '../images/myphoto.jpg'
import done from '../gif/done-96.png'
import namaste from '../images/namaste.png'
import om from '../gif/om.gif'
import trishula from '../gif/trishula.gif'

import '../styles/Home.css'

const Home = () => {
  const navigate = useNavigate()

  const navigateAndReset = (to) => {
    navigate(to, { replace: true });
    window.scrollTo(0, 0);
  };

  return (
    <Container className="flex-container">

      <header className="flex-header mt-4">
        <div className="flex-img mt-4">
          <Image src={myPhoto} className="home-img" />
        </div>

        <h3 className="text-muted">
          <Image src={om} className='gif' />
          <b>Намасте</b>
          <Image src={namaste} className='gif' />
          <br /> Вас приветствует <b className='my-name'>Тиртхадева</b> <br />
        </h3>
        <h3 className='text-muted'> В миру <b className='my-name'>Тимур Таиров</b></h3>
      </header>

      <main className="mt-4">

        <div className='home-container'>
          <h4 className='text-muted'>
            <Image src={done} className='gif' />
            Ученик просветленного мастера
          </h4>
          <h4 className='text-muted'>
            <Image src={done} className='gif' />
            Преподаватель Йоги и Медитации
          </h4>
          <h4 className='text-muted'>
            <Image src={done} className='gif' />
            Ваш наставник на пути Йоги и Дхармы
          </h4>
        </div>

        <h4 className="mt-4 d-flex justify-content-center"><b>Моя миссия:</b></h4>

        <div className='home-container'>
          <h4 className='text-muted'>
            <Image src={done} className='gif' />
            Cлужение Высшим идеалам Йоги (Гуру, Дхарме и сангхе)
          </h4>
          <h4 className='text-muted'>
            <Image src={done} className='gif' />
            Помощь всем живым существам в преодолении неведения
          </h4>
          <h4 className='text-muted'>
            <Image src={done} className='gif' />
            Распространение истинных знаний йоги <br />
          </h4>
        </div>

        <div className='home-flex-item'>
          <Button className='flat-btn' variant='flat' onClick={() => navigateAndReset('/education')}>О себе</Button>
          <Button className='flat-btn' variant='flat' onClick={() => navigateAndReset('/contacts')}>Контакты</Button>
          <Button className='flat-btn' variant='flat' onClick={() => navigateAndReset('/schedule')}>Расписание</Button>
          <Button className='flat-btn' variant='flat' onClick={() => navigateAndReset('/master')}>Традиция</Button>
          <Button className='flat-btn' variant='flat' onClick={() => navigateAndReset('/myvideo')}>Мои видео</Button>
          <Button className='flat-btn' variant='flat' onClick={() => navigateAndReset('/videosguru')}>Видео с Гуру</Button>
        </div>



        <Image src={trishula} className='trishula' />
      </main>
    </Container >
  )
}

export default Home
