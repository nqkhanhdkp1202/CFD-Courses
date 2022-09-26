import React from 'react'

export default function MyCourse({ name, opening_time, video_count }) {
    return (
        <div className="item">
            <div className="cover">
                <img src="/img/img3.png" alt="" />
            </div>
            <div className="info">
                <a href="#" className="name">
                    {name}
                </a>
                <div className="date">{opening_time}</div>
                <div className="row">
                    <div className>
                        <img src="/img/clock.svg" alt="" className="icon" />54 giờ
                    </div>
                    <div className>
                        <img src="/img/play.svg" alt="" className="icon" />{video_count}
                    </div>
                    <div className>
                        <img src="/img/user.svg" alt="" className="icon" />20 học viên
                    </div>
                </div>
                <div className="process">
                    <div className="line">
                        <div className="rate" style={{ width: '30%' }} />
                    </div>
                    30%
                </div>
                <div className="btn overlay round btn-continue">
                    Tiếp tục học
                </div>
            </div>
        </div>
    )
}
