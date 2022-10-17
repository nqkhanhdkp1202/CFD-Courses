import React, { Suspense } from 'react'
import {
  useRoutes,
} from "react-router-dom";
import MainProvider from './context/MainContext'
import { Provider } from 'react-redux';
import routers from './routers'
import store from './store/index'

function App() {

  const element = useRoutes(routers)
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <MainProvider>
        <Provider store={store}>
          {element}
        </Provider>
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
