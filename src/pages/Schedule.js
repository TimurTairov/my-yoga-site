import React from 'react'
import { Container, Image } from 'react-bootstrap'
import info from '../gif/info.gif'
import whatsapp from '../img/icons8-whatsapp 2.gif'
import yogaClass from '../images/yogaclass.jpg'
import '../styles/Schedule.css'
import '../styles/Gif.css'

const Schedule = () => {
  return (
    <Container>
      <h1 className='title'>Расписание занятий</h1>
      <h3 className='text-muted'>1. <a href='https://fitness-cccp.ru/clubs/mihajlovskij/' target='_blank' rel='noreferrer' >Фитнес клуб СССР Волгоградский проспект </a></h3>
      <h5 className=' text-muted'>
        <Image src={info} className='small-gif' />
        Понедельник 8:30 Хатха йога (90 минут) <br />
        <Image src={info} className='small-gif' />
        Среда 8:30 Кундалини йога (90 минут) <br />
        <Image src={info} className='small-gif' />
        Суббота 9:00 Хатха йога (90 минут) <br />
        <Image src={info} className='small-gif' />
        Суббота 10:30 Йога в гамаках (55 минут) <br />
      </h5><br />

      <h3 className='text-muted'>2. <a href='https://ivanovskoe.mangofitness.ru/' target='_blank' rel='noreferrer'>Фитнес клуб Манго</a></h3>
      <h5 className='text-muted'>
        <Image src={info} className='small-gif' />
        Понедельник 21:00 Хатха йога (90 минут) <br />
      </h5><br />


      <h3 className='text-muted'>3. <a href='https://fitnessavenue.ru/' target='_blank' rel='noreferrer'>Фитнес Авеню</a></h3>
      <h5 className='text-muted'>
        <Image src={info} className='small-gif' />
        Вторник 9:00 Хатха Йога (60 минут) <br />
        <Image src={info} className='small-gif' />
        Пятница 9:00 Хатха Йога (60 минут) <br />
      </h5><br />

      <h3 className='text-muted'>4. <a href='http://prostozvezda.ru/' target='_blank' rel='noreferrer'>Детский центр "Звезда"</a></h3>
      <h5 className='text-muted'>
        <Image src={info} className='small-gif' />
        Вторник 17:00 Хатха йога (взрослые) (60 минут) <br />
        <Image src={info} className='small-gif' />
        Вторник 18:00 здоровая спина (дети) (60 минут) <br />
        <Image src={info} className='small-gif' />
        Четверг 17:00 Хатха йога (взрослые) (60 минут) <br />
        <Image src={info} className='small-gif' />
        Четверг 18:00 здоровая спина (дети) (60 минут) <br />
      </h5><br />

      <h3 className='text-muted'>5. <a href='https://ddsport.fitness/' target='_blank' rel='noreferrer'>Фитнес клуб DD Sport</a></h3>
      <h5 className='text-muted'>
        <Image src={info} className='small-gif' />
        Среда 20:00 Хатха йога (90 минут) <br />
      </h5><br />

      <h3 className='text-muted'>6.
        <a href="whatsapp://send?phone=79672067710"> Йога онлайн </a>
        <a href="whatsapp://send?phone=79672067710" className='btn limegreen'>
          <Image src={whatsapp} className='small-gif '></Image>
          записаться</a>
      </h3>
      <h5 className='text-muted'>
        <Image src={info} className='small-gif' />
        Вторник 20:30 Медитация (60 минут) <br />
        <Image src={info} className='small-gif' />
        Четверг 20:30 Медитация (60 минут) <br />
        <Image src={info} className='small-gif' />
        Пятница 19:00 Хатха йога (90 минут) <br />
        <Image src={info} className='small-gif' />
        Воскресение 10:00 Кундалини йога (90 минут) <br />
        <br />
      </h5><br />


      <Image src={yogaClass} alt='yoga class' className='giphy' />
    </Container>
  )
}

export default Schedule