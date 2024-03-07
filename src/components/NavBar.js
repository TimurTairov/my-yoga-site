import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap'
import '../styles/Navbar.css'

const NavBar = () => {
  return (

    <Navbar
      bg="light" data-bs-theme="light"
      collapseOnSelect expand='lg' className='my-navbar'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className='navbar-button' />
        <Navbar.Collapse id='responsive-navbar-nav'>

          <Nav className='me-auto top-menu'>
            <Nav.Link className='navlink' href='/'>Главная</Nav.Link>
          </Nav>

          <Nav className='top-menu my-nav'>
            <NavDropdown title='О себе' id='basic-nav-dropdown'>
              <NavDropdown.Item className='nav-dropdown-item' href='/education'>Образование</NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' href='/certificates'>Сертификаты</NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' href='/myphoto'>Фото</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='nav-dropdown-item' href='/contacts'>Контакты</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Йога' id='basic-nav-dropdown'>
              <NavDropdown.Item className='nav-dropdown-item' href='/schedule'>Расписание</NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' href='/feedbacks'>Отзывы</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='nav-dropdown-item' href='/basicrules'>Основные положения хатха йоги</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Традиция' id='basic-nav-dropdown'>
              <NavDropdown.Item className='nav-dropdown-item' href='/master'>Мастер</NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' href='/drevo-pribezhishcha'>Древо Прибежища</NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' href='/metody'>Методы Учения</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='nav-dropdown-item' href='/links'>Полезные ссылки</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Видео' id='basic-nav-dropdown'>
              <NavDropdown.Item className='nav-dropdown-item' href='/myvideo'>Мои видео</NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' href='/videosguru'>Видео с Гуру</NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' href='/videosmonahami'>Видео с монахами</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar

