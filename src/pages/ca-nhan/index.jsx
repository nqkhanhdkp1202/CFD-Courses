import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { usePage } from '../../hooks/usePage'
import userServices from '../../services/userServices'
import Coin from './coin'
import Project from './du-an'
import MyCourses from './khoa-hoc'
import Payment from './lich-su-thanh-toan'

export default function Profile() {
    const { user } = usePage()
    const [form, setForm] = useState({})
    const [isFetching, setIsFetching] = useState(false)
    const [error, setErrorMessage] = useState('')

    const onChangeInfo = async () => {
        try {
            setIsFetching(true)
            const result = userServices.updateInfo(form)
            if (result.data) {
                const user = await userServices.getInfo()
                if (user.data) {
                    localStorage.setItem('user', JSON.stringify(user.data))
                    setUser(user.data)
                }
            }
        }
        catch (err) {
            setErrorMessage(err)
        }
        finally {
            setIsFetching(false)
        }
    }

    return (
        <div className="tab1">
            {!user && <Navigate to='/' />}
            <label>
                <p>Họ và tên<span>*</span></p>
                <input type="text" placeholder={user.name} onChange={(e) => form.name = e.currentTarget.value} />
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input type="text" placeholder={user.phone} onChange={(e) => form.phone = e.currentTarget.value} />
            </label>
            <label>
                <p>Email<span>*</span></p>
                <input defaultValue={user.username} disabled type="text" />
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input type="text" placeholder="Facebook url" />
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input type="text" placeholder="Skype url" />
            </label>
            <div className="btn main rect" onClick={onChangeInfo}>LƯU LẠI</div>
        </div>
    )
}
