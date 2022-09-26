import React from 'react'
import { generatePath, useParams } from 'react-router-dom';
import { moneyFormat, timeFormat } from '../../config/format';
import { REGISTER_PATH } from '../../config/path';
import useQuery from '../../hooks/useQuery';
import useScrollTop from '../../hooks/useScrollTop';
import courseService from '../../services/courseServices';

export default function Register() {

    const { slug, id } = useParams();

    const { data: course, loading: loadingCourse, error: errorCourse } = useQuery(() => courseService.getDetail(id), [id])

    useScrollTop([])

    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">{course.title}</h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> {timeFormat(course.opening_time)}</div>
                            <div className="time"><strong>Thời lượng:</strong> {course.count_video} buổi</div>
                            <div className="time"><strong>Học phí:</strong> {moneyFormat(course.money)} VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input type="text" placeholder="Họ và tên bạn" />
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input type="text" placeholder="Số điện thoại" />
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input type="text" placeholder="Email của bạn" />
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input type="text" placeholder="https://facebook.com" />
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label>
                            <div className="btn main rect">đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>

    )
}
