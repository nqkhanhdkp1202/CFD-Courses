import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { PROFILE_PATH, PROFILE_PATH_COURSES } from '../config/path';
import Navigator from './Navigator';
import store from '../store';

export default function Header() {

    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch()
    const { openLogin, openRegister } = useSelector(store => store.page)
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()
        dispatch({ type: 'page/openLogin' })
    }

    function handleRegister(e) {
        e.preventDefault()
        dispatch({ type: 'page/openRegister' })
    }

    function handleLogout(e) {
        e.preventDefault()
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        dispatch({ type: 'auth/logout' })
        navigate('/')
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
                            user ? (
                                <div className="have-login">
                                    <div className="account">
                                        <a href="#" className="info">
                                            <div className="name">{user.name}</div>
                                            <div className="avatar">
                                                <img src={user.avatar} alt="" />
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
                                    <a href="#" onClick={handleRegister} className="btn main btn-open-login">Đăng ký</a>
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
