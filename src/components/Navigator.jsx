import React from 'react'
import { Link } from 'react-router-dom'
import { PROFILE_PATH_COURSES, PROFILE_PATH_PROJECT } from '../config/path'

export default function Navigator() {
    return (
        <>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng nhập</a>
                        <a href="#">Đăng ký</a>
                    </li>
                    <li className="active">
                        <Link to='/' href="#">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to='/thanh-vien'>CFD Team</Link>
                    </li>
                    <li>
                        <Link to={PROFILE_PATH_COURSES}>Khóa Học</Link>
                    </li>
                    <li>
                        <Link to={PROFILE_PATH_PROJECT}>Dự Án</Link>
                    </li>
                    <li>
                        <Link to='/hop-tac'>Liên hệ</Link>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav"></div>
        </>
    )
}
