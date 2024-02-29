import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import Contacts from '../pages/Contacts'
import Certificates from '../pages/Certificates'
import MyPhoto from '../pages/MyPhoto'
import Feedbacks from '../pages/Feedbacks'
import Education from '../pages/Education'
import Schedule from '../pages/Schedule'
import BasicRules from '../pages/BasicRules'
import Master from '../pages/Master'
import Pribejishe from '../pages/Pribejishe'
import Metody from '../pages/Metody'
import Links from '../pages/Links'
import MyVideo from '../pages/MyVideo'
import VideoSGuru from '../pages/VideoSGuru'
import VideoSMonahami from '../pages/VideoSMonahami'



const AppRouter = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/education' element={<Education />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/myphoto' element={<MyPhoto />} />
        <Route path='/contacts' element={<Contacts />} />

        <Route path='/schedule' element={<Schedule />} />
        <Route path='/feedbacks' element={<Feedbacks />} />
        <Route path='/basicrules' element={<BasicRules />} />

        <Route path='/master' element={<Master />} />
        <Route path='/drevo-pribezhishcha' element={<Pribejishe />} />
        <Route path='/metody' element={<Metody />} />
        <Route path='/links' element={<Links />} />

        <Route path='/myvideo' element={<MyVideo />} />
        <Route path='/videosguru' element={<VideoSGuru />} />
        <Route path='/videosmonahami' element={<VideoSMonahami />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter