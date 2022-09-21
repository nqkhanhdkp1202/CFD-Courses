import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { PROFILE_PATH, PROFILE_PATH_COURSES } from '../config/path';
import { MainContext } from '../context/MainContext';
import { usePage } from '../hooks/usePage';
import Navigator from './Navigator';

export default function Header() {

    const { isOpenLoginModal, setisOpenLoginModal, isOpenSignupModal, setisOpenSignupModal } = usePage()
    const { user, setUser } = useContext(MainContext)
    function handleLogin(e) {
        e.preventDefault();
        setisOpenLoginModal(true);
    }

    function handleSignup(e) {
        e.preventDefault();
        setisOpenSignupModal(true);
    }

    function handleLogout(e) {
        e.preventDefault();
        setUser({ status: false })
    }

    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger">
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to='/' className="logo">
                        <img src="/img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        {
                            user.status ? (
                                <div className="have-login">
                                    <div className="account">
                                        <a href="#" className="info">
                                            <div className="name">Trần Lê Trọng Nghĩa</div>
                                            <div className="avatar">
                                                <img src="/img/avt.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hamberger">
                                    </div>
                                    <div className="sub">
                                        <Link to={PROFILE_PATH_COURSES}>Khóa học của tôi</Link>
                                        <Link to={PROFILE_PATH}>Thông tin tài khoản</Link>
                                        <a onClick={handleLogout} href="#">Đăng xuất</a>
                                    </div>
                                </div>
                            ) : (
                                <div className="not-login bg-none" >
                                    <a href="#" onClick={handleLogin} className="btn-register">Đăng nhập</a>
                                    <a href="#" onClick={handleSignup} className="btn main btn-open-login">Đăng ký</a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </header >
            <Navigator />

        </>
    )
}
