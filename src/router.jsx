import React from 'react'
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
import Home from './pages';
import Contact from './pages/hop-tac';
import CourseDetail from './pages/[slug]';

const router = [
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/hop-tac', element: <Contact />
            },
            {
                path: '/thanh-vien', element: <Team />
            },
            {
                path: COURSE_DETAIL, element: <CourseDetail />
            },
            {
                path: '*', element: <Page404NotFound />
            },
            {
                path: '/ca-nhan',
                element: <ProfileLayout />,
                children: [
                    {
                        path: PROFILE_PATH,
                        element: <Profile />
                    },
                    {
                        path: PROFILE_PATH_PROJECT,
                        element: <Project />
                    },
                    {
                        path: PROFILE_PATH_PAYMENT,
                        element: <Payment />
                    },
                    {
                        path: PROFILE_PATH_COURSES,
                        element: <MyCourses />
                    },
                    {
                        path: PROFILE_PATH_COIN,
                        element: <Coin />
                    },
                ]
            }
        ]
    }
]

export default router