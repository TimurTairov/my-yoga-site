import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Container className='mt-4 mb-4 border'>
      <div className="d-flex flex-sm-row justify-content-center">
        <div className='d-flex flex-column mx-2'>
          <Link to='/'>На главную</Link>
        </div>
        <div className='d-flex flex-column mx-2'>
          <Link to='education'>Образование</Link>
          <Link to='certificates'>Сертификаты</Link>
          <Link to='myphoto'>Мои фото</Link>
          <Link to='contacts'>Контакты</Link>
        </div>
        <div className='d-flex flex-column mx-2'>
          <Link to='contacts'>Расписание</Link>
          <Link to='contacts'>Отзывы</Link>
          <Link to='contacts'>Положения йоги</Link>
          <Link to='contacts'>Наули</Link>
        </div>
        <div className='d-flex flex-column mx-2'>
          <Link to='contacts'>Мастер</Link>
          <Link to='contacts'>Древо Прибежища</Link>
          <Link to='contacts'>Методы Учения</Link>
          <Link to='contacts'>Полезные ссылки</Link>
        </div>
        <div className='d-flex flex-column mx-2'>
          <Link to='contacts'>Мастер</Link>
          <Link to='contacts'>Древо Прибежища</Link>
          <Link to='contacts'>Методы Учения</Link>
          <Link to='contacts'>Полезные ссылки</Link>
        </div>

      </div>

    </Container>
  )
}

export default Menu