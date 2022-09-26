import React, { Suspense } from 'react'
import {
  useRoutes,
} from "react-router-dom";
import MainProvider from './context/MainContext'
import router from './router'

function App() {

  const element = useRoutes(router)
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <MainProvider>
        {element}
      </MainProvider>
    </Suspense>
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
