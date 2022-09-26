import React from 'react'
import { useState } from 'react'
import useQuery from '../../hooks/useQuery'
import userServices from '../../services/userServices'
import MyCourse from '../../components/MyCourse'

export default function MyCourses() {
    const { data: myCourse, loading: loadingCourse } = useQuery(() => userServices.getMyCourse(), [])
    if (loadingCourse) {
        return <p style={{ padding: 100, textAlign: 'center', fontSize: 24 }}>Đang tải dữ liệu ... </p>
    }

    if (myCourse.length === 0) {
        return <p style={{ padding: 100, textAlign: 'center', fontSize: 24 }}>Bạn chưa đăng ký khóa học nào</p>
    }

    return (
        <div className="tab2">
            {
                myCourse && myCourse.map((e) => <MyCourse key={e.id} {...e} />)
            }
        </div>
    )
}
