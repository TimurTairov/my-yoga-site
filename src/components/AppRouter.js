import { lazy } from 'react'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import MainLayout from '../layouts/MainLayout'
import ScrollToTop from '../utils/scrollToTop'

const Home = lazy(() => import('../pages/Home'))
const Contacts = lazy(() => import('../pages/Contacts'))
const Certificates = lazy(() => import('../pages/Certificates'))
const MyPhoto = lazy(() => import('../pages/MyPhoto'))
const Feedbacks = lazy(() => import('../pages/Feedbacks'))
const Education = lazy(() => import('../pages/Education'))
const Schedule = lazy(() => import('../pages/Schedule'))
const BasicRules = lazy(() => import('../pages/BasicRules'))
const Master = lazy(() => import('../pages/Master'))
const Pribejishe = lazy(() => import('../pages/Pribejishe'))
const Metody = lazy(() => import('../pages/Metody'))
const Links = lazy(() => import('../pages/Links'))
const MyVideo = lazy(() => import('../pages/MyVideo'))
const VideoSGuru = lazy(() => import('../pages/VideoSGuru'))
const VideoSMonahami = lazy(() => import('../pages/VideoSMonahami'))
const Nauli = lazy(() => import('../pages/Nauli'))

const AppRouter = () => {
  return (
    <Router >
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainLayout />}>

          <Route index element={<Home />} />

          <Route path='education' element={<Education />} />
          <Route path='certificates' element={<Certificates />} />
          <Route path='myphoto' element={<MyPhoto />} />
          <Route path='contacts' element={<Contacts />} />

          <Route path='schedule' element={<Schedule />} />
          <Route path='feedbacks' element={<Feedbacks />} />
          <Route path='basicrules' element={<BasicRules />} />
          <Route path='nauli' element={<Nauli />} />

          <Route path='master' element={<Master />} />
          <Route path='drevo-pribezhishcha' element={<Pribejishe />} />
          <Route path='metody' element={<Metody />} />
          <Route path='links' element={<Links />} />

          <Route path='myvideo' element={<MyVideo />} />
          <Route path='videosguru' element={<VideoSGuru />} />
          <Route path='videosmonahami' element={<VideoSMonahami />} />

        </Route>

      </Routes>
    </Router>
  )
}

export default AppRouter