import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const NavBar = () => {


  return (
    // <nav>
    //   <ul className='menu'>
    //     <li> <NavLink to='/'> Главная </NavLink> </li>
    //     <ul>
    //       <li> <NavLink to='/education'> Образование </NavLink> </li>
    //       <li> <NavLink to='/certificates'> Сертификаты </NavLink> </li>
    //       <li> <NavLink to='/myphoto'> Фото </NavLink> </li>
    //       <li> <NavLink to='/contacts'> Контакты </NavLink> </li>
    //     </ul>

    //     <ul>
    //       <li> <NavLink to='/master'> Мастер </NavLink> </li>
    //       <li> <NavLink to='/drevo-pribezhishcha'> Древо Прибежища </NavLink> </li>
    //       <li> <NavLink to='/metody'> Методы Учения </NavLink> </li>
    //       <li> <NavLink to='/links'> Полезные ссылки </NavLink> </li>
    //     </ul>

    //     <ul>
    //       <li> <NavLink to='/schedule'> Расписание </NavLink> </li>
    //       <li> <NavLink to='/feedbacks'> Отзывы </NavLink> </li>
    //       <li> <NavLink to='/basicrules'> Основные положения хатха йоги </NavLink> </li>

    //     </ul>

    //     <ul>
    //       <li> <NavLink to='/schedule'> Расписание </NavLink> </li>
    //       <li> <NavLink to='/contacts'> Контакты </NavLink> </li>
    //       <li> <NavLink to='/schedule'> Расписание </NavLink> </li>
    //     </ul>
    //   </ul>

    // </nav>

    <Navbar
      bg="light" data-bs-theme="light"
      collapseOnSelect expand='lg' className='my-navbar'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className='navbar-button' />
        <Navbar.Collapse id='responsive-navbar-nav'>

          <Nav className='me-auto top-menu'>

            <Nav.Link className='navlink'> <NavLink to='/'> Главная </NavLink> </Nav.Link>
          </Nav>

          <Nav className='top-menu my-nav'>
            <NavDropdown title='О себе' id='basic-nav-dropdown'>
              <NavDropdown.Item className='nav-dropdown-item'>
                <NavLink to='/education'> Образование </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item'>
                <NavLink to='/certificates'> Сертификаты </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item'>
                <NavLink to='/myphoto'> Фото </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='nav-dropdown-item'>
                <NavLink to='/contacts'> Контакты </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Йога' id='basic-nav-dropdown'>
              <NavDropdown.Item className='nav-dropdown-item'>
                <NavLink to='/schedule'> Расписание </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' to='/feedbacks'>
                <NavLink to='/feedbacks'> Отзывы </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='nav-dropdown-item' to='/basicrules'>
                <NavLink to='/basicrules'> Основные положения хатха йоги </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Традиция' id='basic-nav-dropdown'>
              <NavDropdown.Item className='nav-dropdown-item' to='/master'>
                <NavLink to='/master'> Мастер </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' to='/drevo-pribezhishcha'>
                <NavLink to='/drevo-pribezhishcha'> Древо Прибежища </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' to='/metody'>
                <NavLink to='/metody'> Методы Учения </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='nav-dropdown-item' to='/links'>
                <NavLink to='/links'> Полезные ссылки </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Видео' id='basic-nav-dropdown'>
              <NavDropdown.Item className='nav-dropdown-item' to='/myvideo'>
                <NavLink to='/myvideo'> Мои видео </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' to='/videosguru'>
                <NavLink to='/videosguru'> Видео с Гуру </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-dropdown-item' to='/videosmonahami'>
                <NavLink to='/videosmonahami'> Видео с монахами </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar

