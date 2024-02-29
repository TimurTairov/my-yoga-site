import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Image } from 'react-bootstrap'
import myPhoto from '../images/myphoto.jpg'
import done from '../gif/done.gif'
import done1 from '../gif/done1.gif'
import namaste from '../gif/namaste.gif'
import om from '../gif/om.gif'
import trishula from '../gif/trishula.gif'

import '../styles/Home.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Container className="flex-container">
      <div className="flex-img mt-4">
        <Image src={myPhoto} className="home-img" />
      </div>
      <header className="flex-header mt-4">
        <h3 className="header__title text-muted">
          <Image src={om} className='gif' />
          Намасте
          <Image src={namaste} className='gif' />
          <br /> Вас приветствует <b className='my-name'>Тиртхадева</b> <br />
        </h3>
        <h3 className='text-muted'> В миру <b className='my-name'>Тимур Таиров</b></h3>
      </header>
      <main className="flex-main mt-4">
        <h4 className='text-muted'>
          <Image src={done} className='gif' />
          Ученик просветленного мастера   <br /> Свами Вишнудевананда Гири Махараджа <br />
          <Image src={done} className='gif' />
          Преподаватель Йоги и Медитации <br />
          <Image src={done} className='gif' />
          Ваш наставник на пути Йоги и Дхармы <br />
        </h4> <br />

        <h4 className='text-muted'>
          <b>Моя миссия:</b><br />
          <Image src={done1} className='gif' />
          Cлужение Высшим идеалам Йоги (Гуру, Дхарме и сангхе) <br />
          <Image src={done1} className='gif' />
          Помощь всем живым существам в преодолении неведения <br />
          <Image src={done1} className='gif' />
          Распространение истинных знаний йоги <br />
        </h4> <br />


        <Button className='flat-btn' variant='flat' onClick={() => navigate('/education')}>О себе</Button>
        <Button className='flat-btn' variant='flat' onClick={() => navigate('/contacts')}>Контакты</Button>
        <Button className='flat-btn' variant='flat' onClick={() => navigate('/schedule')}>Расписание</Button>
        <Button className='flat-btn' variant='flat' onClick={() => navigate('/master')}>Традиция</Button>
        <Button className='flat-btn' variant='flat' onClick={() => navigate('/myvideo')}>Мои видео</Button>

        <Image src={trishula} className='trishula' />
      </main>
    </Container >
  )
}

export default Home
