import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import MyFooter from '../components/MyFooter'
import NavBar from '../components/NavBar'
import '../styles/MainLayout.css'

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<p className="loading">Загрузка ...</p>}>
        <Outlet />
      </Suspense>
      <MyFooter />
    </>
  )
}

export default MainLayout
