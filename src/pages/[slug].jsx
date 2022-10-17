import React, { useEffect, useState } from 'react'
import { generatePath, Link, useParams } from 'react-router-dom'
import Accordion from '../components/course/Accordion';
import Course from '../components/course/Course';
import Ticked from '../components/course/Ticked';
import Page404 from '../components/Page404';
import useQuery from '../hooks/useQuery'
import useScrollTop from '../hooks/useScrollTop';
import courseService from '../services/courseServices'
import moment from 'moment/moment';
import { moneyFormat, timeFormat } from '../config/format';
import { REGISTER_PATH } from '../config/path';

export default function CourseDetail() {

    const { slug, id } = useParams();
    const { data: courses } = useQuery(() => courseService.getList(), [])
    const { data: course, loading: loadingCourse, error: errorCourse } = useQuery(() => courseService.getDetail(id), [id])

    if (loadingCourse) {
        return <p style={{ padding: 100, textAlign: 'center', fontSize: 24 }}>Đang tải dữ liệu ... </p>
    }
    if (course === null) {
        return <Page404 />
    }
    // useScrollTop([id])
    const registerPath = generatePath(REGISTER_PATH, { slug, id })


    return (
        <main className="course-detail" id="main">
            <section className="banner style2" style={{ background: course.template_color_banner && `${course.template_color_banner}` }}>
                <div className="container">
                    <div className="info">
                        <h1>{course.title}</h1>
                        <div className="row">
                            <div className="date"><strong>Khai giảng:</strong> {timeFormat(course.opening_time)}</div>
                            <div className="time"><strong>Thời lượng:</strong> {course.count_video} buổi</div>
                        </div>
                        <Link to={registerPath} className="btn white round" style={{ background: course.template_color_btn && `${course.template_color_btn}` }} >đăng ký</Link>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="video">
                            <div className="icon">
                                <img src="/img/play-icon-white.png" alt="" />
                            </div> <span>giới thiệu</span>
                        </div>
                        <div className="money">{moneyFormat(course.money)} VNĐ</div>
                    </div>
                </div>
            </section >
            <section className="section-2">
                <div className="container">
                    <p className="des"></p>
                    <h2 className="title">giới thiệu về khóa học</h2>
                    <div className="cover">
                        <img src={course.thumbnailUrl} alt="" />
                    </div>
                    <h3 className="title">nội dung khóa học</h3>
                    {
                        course.content.map((e, i) => <Accordion key={e.id} index={i} {...e} />)
                    }
                    <h3 className="title">yêu cầu cần có</h3>
                    <div className="row row-check">
                        {course.required.map((e) =>
                            <Ticked key={e.id} {...e} />
                        )}
                    </div>
                    <h3 className="title">hình thức học</h3>
                    <div className="row row-check">
                        {
                            course.benefits.map((e) =>
                                <Ticked key={e.id} {...e} />
                            )
                        }
                    </div>
                    <h3 className="title">
                        <div className="date-start">lịch học</div>
                        <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                    </h3>
                    <p>
                        <strong>Ngày bắt đầu: </strong> {course.opening_time} <br />
                        <strong>Thời gian học: </strong> {course.schedule}
                    </p>
                    <h3 className="title">Người dạy</h3>
                    <div className="teaches">
                        <div className="teacher">
                            <div className="avatar">
                                <img src={course.teacher.avatar} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">{course.teacher.title}</div>
                                <div className="title">{course.teacher.position}</div>
                                <p className="intro">
                                    {course.teacher.description}
                                </p>
                                <p><strong>Website:</strong> <a href={course.teacher.website} target="_blank">{course.teacher.website}</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="user">
                            <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
                        </div>
                        <Link to={registerPath} className="btn main btn-register round">đăng ký</Link>
                        <div className="btn-share btn overlay round btn-icon">
                            <img src="/img/facebook.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-4">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">Khóa học</h3>
                        <h2 className="main-title">Liên quan</h2>
                    </div>
                    <div className="list row">
                        {
                            courses && courses.slice(0, 3).map((e) => <Course key={e.id} {...e} />)
                        }
                    </div>
                </div>
            </section>
        </main >
    )
}
