import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import BtnDarkMode from './btnDarkMode/BtnDarkMode'
import '../styles/Navbar.css'
import logo from '../img/logo.svg'


const NavBar = () => {



  return (
    <Navbar
      //bg="light"
      //bg="dark"
      data-bs-theme='dark'
      collapseOnSelect expand='lg' className='my-navbar'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className='navbar-button' />
        <Navbar.Collapse id='responsive-navbar-nav'>

          <Nav className='me-auto logo'>
            <NavLink to='.' end>
              <div className='logo-container'>
                <img src={logo} className='img-logo' alt='home' />
                <h3 className='text-logo'>Тиртхадева</h3>
              </div>
            </NavLink>
          </Nav>

          <Nav className='top-menu my-nav'>

            <NavDropdown title='О себе' id='basic-nav-dropdown' className='main-menu'>
              <NavDropdown.Item className='nav-dropdown-item'>
                <NavLink to='education'> Образование </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item'>
                <NavLink to='certificates'> Сертификаты </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item'>
                <NavLink to='myphoto'> Фото </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='nav-dropdown-item'>
                <NavLink to='contacts'> Контакты </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Йога' id='basic-nav-dropdown' className='main-menu'>
              <NavDropdown.Item className='nav-dropdown-item'>
                <NavLink to='schedule'> Расписание </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' to='/feedbacks'>
                <NavLink to='feedbacks'> Отзывы </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='nav-dropdown-item' to='/basicrules'>
                <NavLink to='basicrules'> Основные положения хатха йоги </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' to='/basicrules'>
                <NavLink to='nauli'> Наули крийя </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Традиция' id='basic-nav-dropdown' className='main-menu'>
              <NavDropdown.Item className='nav-dropdown-item' to='/master'>
                <NavLink to='master'> Мастер </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' to='/drevo-pribezhishcha'>
                <NavLink to='drevo-pribezhishcha'> Древо Прибежища </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' to='/metody'>
                <NavLink to='metody'> Методы Учения </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='nav-dropdown-item' to='/links'>
                <NavLink to='links'> Полезные ссылки </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Видео' id='basic-nav-dropdown' className='main-menu'>
              <NavDropdown.Item className='nav-dropdown-item' to='/myvideo'>
                <NavLink to='myvideo'> Мои видео </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' to='/videosguru'>
                <NavLink to='videosguru'> Видео с Гуру </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' to='/videosmonahami'>
                <NavLink to='videosmonahami'> Видео с монахами </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>

          <Nav className='top-menu dark-mode'>
            <BtnDarkMode />
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar

