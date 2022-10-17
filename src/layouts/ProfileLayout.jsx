import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import {
    PROFILE_PATH,
    PROFILE_PATH_COURSES,
    PROFILE_PATH_COIN,
    PROFILE_PATH_PAYMENT,
    PROFILE_PATH_PROJECT
} from '../config/path'


export default function ProfileLayout() {

    const { user } = useSelector(store => store.auth)

    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src={user.avatar} alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">{user.name}</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink end to={PROFILE_PATH}>Thông tin tài khoản</NavLink>
                            <NavLink to={PROFILE_PATH_COURSES}>Khóa học của bạn</NavLink>
                            <NavLink to={PROFILE_PATH_PROJECT}>Dự án đã làm</NavLink>
                            <NavLink to={PROFILE_PATH_PAYMENT}>Lịch sử thanh toán</NavLink>
                            <NavLink to={PROFILE_PATH_COIN}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
