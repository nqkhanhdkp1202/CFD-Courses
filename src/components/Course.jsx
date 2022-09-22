import React from 'react'
import { Link } from 'react-router-dom'
import { COURSE_DETAIL } from '../config/path'
import { useCourse } from '../hooks/useCourse';

export default function Course({ title, short_description, thumbnailUrl, teacher, course_status }) {

    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link to="" className="cover">
                    <img src={thumbnailUrl} />
                    {course_status == 'dang-dien-ra' ? <span className="badge b2">Đang diễn ra</span> :
                        course_status == 'da-ket-thuc' ? <span className="badge b1">Đã kết thúc</span> :
                            <span className="badge b3">Sắp khai giảng</span>
                    }
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="/img/icon-user-white.svg" alt="" />
                                12</div>
                            <div className="heart">
                                <img src="/img/icon-heart.svg" alt="" /> 100
                            </div>
                        </div>
                        <div className="share">
                            <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </Link>
                <div className="info">
                    <Link to={COURSE_DETAIL} className="name" >
                        {title}
                    </Link>
                    <p className="des">
                        {short_description}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={teacher.avatar} alt="" />
                        </div>
                        <div className="name">{teacher.title}</div>
                    </div>
                    <div className="register-btn">Đăng Ký</div>
                </div>
            </div>
        </div>
    )
}
