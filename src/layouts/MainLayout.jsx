import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginModal from '../components/LoginModal'
import RegisterModal from '../components/RegisterModal'

export default function MainLayout() {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
            <RegisterModal />
            <LoginModal />
        </React.Fragment>
    )
}
