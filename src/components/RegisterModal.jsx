import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { usePage } from '../hooks/usePage'
import authServices from '../services/authServices'


export default function RegisterModal() {

    const {
        isOpenRegister,
        setIsOpenRegister } = usePage()
    const [isFetching, setIsFetching] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [form, setForm] = useState({})


    const onSubmit = async () => {
        try {
            setIsFetching(true)
            const result = await authServices.register(form)
            setIsOpenRegister(false)
        }
        catch (err) {
            setErrorMessage(err)
        }
        finally {
            setIsFetching(false)
        }
    }
    return ReactDOM.createPortal(
        <div className="popup-form popup-login" style={{ display: isOpenRegister ? 'flex' : 'none' }}>
            <div className="wrap">
                <h2 className="title">Đăng ký</h2>
                <div className="tab1">
                    <label>
                        <p>Email<span>*</span></p>
                        <input type="text" placeholder="Email" />
                    </label>
                    <label>
                        <p>Mật khẩu<span>*</span></p>
                        <input onChange={(e) => form.password = e.currentTarget.value} type="password" placeholder="Mật khẩu" />
                    </label>
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <input type="text" placeholder="Họ và tên" />
                    </label>
                    {
                        errorMessage && <p className='error-text' style={{ color: 'red' }}>{errorMessage}</p>
                    }
                    <div className="btn main rect" onClick={onSubmit}>ĐĂNG KÝ</div>
                </div>
                <p className="policy">
                    Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
                </p>
                <div className="close">
                    <img src="img/close-icon.png" alt="" />
                </div>
            </div>
        </div >, document.body
    )
}
