import React from 'react'
import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages'
import Contact from './pages/hop-tac'
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Team from './pages/thanh-vien'
import Page404NotFound from './pages/not-found'
import Profile from './pages/ca-nhan'
import MainLayout from './layouts/MainLayout'
import ProfileLayout from './layouts/ProfileLayout'
import Project from './pages/ca-nhan/du-an'
import Payment from './pages/ca-nhan/lich-su-thanh-toan'
import MyCourses from './pages/ca-nhan/khoa-hoc'
import Coin from './pages/ca-nhan/coin'
import {
  PROFILE_PATH,
  PROFILE_PATH_COURSES,
  PROFILE_PATH_COIN,
  PROFILE_PATH_PAYMENT,
  PROFILE_PATH_PROJECT,
  COURSE_DETAIL
} from './config/path'
import CourseDetail from './pages/[slug]'
import MainProvider from './context/MainContext'
import router from './router'
import LoginModal from './components/LoginModal'
import CourseProvider from './hooks/useCourse'

function App() {

  const element = useRoutes(router)
  return (
    <>
      <MainProvider>
        <CourseProvider>
          {element}
        </CourseProvider>
      </MainProvider>
    </>
    // <MainProvider>
    //   <Routes>
    //     <Route element={<MainLayout />}>
    //       <Route index element={<Home />} />
    //       <Route path='/hop-tac' element={<Contact />} />
    //       <Route path='/thanh-vien' element={<Team />} />
    //       <Route path={COURSE_DETAIL} element={<CourseDetail />} />
    //       <Route path={'/ca-nhan'} element={<ProfileLayout />}  >
    //         <Route path={PROFILE_PATH} element={<Profile />} />
    //         <Route path={PROFILE_PATH_PROJECT} element={<Project />} />
    //         <Route path={PROFILE_PATH_PAYMENT} element={<Payment />} />
    //         <Route path={PROFILE_PATH_COURSES} element={<MyCourses />} />
    //         <Route path={PROFILE_PATH_COIN} element={<Coin />} />
    //       </Route>
    //       <Route path='*' element={<Page404NotFound />} />
    //     </Route>
    //   </Routes>
    // </MainProvider>
  )
}

export default App
