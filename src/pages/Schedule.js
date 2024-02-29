import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Image, Button } from 'react-bootstrap'
import info from '../gif/info.gif'
import whatsapp from '../img/icons8-whatsapp 2.gif'
import '../styles/Schedule.css'

const Schedule = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <h1 className='tittle'>Расписание занятий</h1>
      <h3 className='text-muted'>1. <a href='https://fitness-cccp.ru/clubs/mihajlovskij/' target='_blank' rel='noreferrer' >Фитнес клуб СССР Волгоградский проспект </a></h3>
      <h5 className=' text-muted'>
        <Image src={info} className='small-gif' />
        Понедельник 8:30 Хатха йога (90 минут) <br />
        <Image src={info} className='small-gif' />
        Среда 9:00 Кундалини йога (90 минут) <br />
        <Image src={info} className='small-gif' />
        Суббота 10:00 Хатха йога (90 минут) <br />
        <Image src={info} className='small-gif' />
        Суббота 11:30 Йога в гамаках (55 минут) <br />
      </h5>

      <h3 className='text-muted'>2. <a href='https://sportland-club.ru/club/28/' target='_blank' rel='noreferrer'>Фитнес клуб СпортЛэнд Реутов</a></h3>
      <h5 className='text-muted'>
        <Image src={info} className='small-gif' />
        Вторник 9:30 Йога в гамаках (55 минут) <br />
        <Image src={info} className='small-gif' />
        Вторник 10:00 Хатха йога (90 минут) <br />
        <Image src={info} className='small-gif' />
        Пятница 21:00 Хатха йога (90 минут) <br />
      </h5>

      <h3 className='text-muted'>3. <a href='http://prostozvezda.ru/' target='_blank' rel='noreferrer'>Детский центр "Звезда"</a></h3>
      <h5 className='text-muted'>
        <Image src={info} className='small-gif' />
        Вторник 17:00 Хатха йога (взрослые) (60 минут) <br />
        <Image src={info} className='small-gif' />
        Вторник 18:00 здоровая спина (дети) (60 минут) <br />
        <Image src={info} className='small-gif' />
        Четверг 17:00 Хатха йога (взрослые) (60 минут) <br />
        <Image src={info} className='small-gif' />
        Четверг 18:00 здоровая спина (дети) (60 минут) <br />
      </h5>

      <h3 className='text-muted'>4. <a href='https://ddsport.fitness/' target='_blank' rel='noreferrer'>Фитнес клуб DD Sport</a></h3>
      <h5 className='text-muted'>
        <Image src={info} className='small-gif' />
        Среда 20:00 Хатха йога (90 минут) <br />
      </h5>

      <h3 className='text-muted'>5. Йога онлайн <a href="tel:+79672067710" className='btn limegreen'>
        <Image src={whatsapp} className='small-gif ' ></Image>
        записаться</a>
      </h3>
      <h5 className='text-muted'>
        <Image src={info} className='small-gif' />
        Понедельник 19:30 Хатха йога (90 минут) <br />
        <Image src={info} className='small-gif' />
        Пятница 19:00 Хатха йога (90 минут) <br />
        <Image src={info} className='small-gif' />
        Воскресение 10:00 Кундалини йога (90 минут) <br />
        <br />
      </h5>

      {/* <Button className='flat-btn' variant='flat' onClick={() => navigate('/feedbacks')}>Отзывы</Button>
      <Button className='flat-btn' variant='flat' onClick={() => navigate('/basicrules')}>Положения йоги</Button> */}

      <Image src='https://media.giphy.com/media/dzJ0WT8bOGPFU0lTwz/giphy.gif' className='giphy' />
    </Container>
  )
}

export default Schedule