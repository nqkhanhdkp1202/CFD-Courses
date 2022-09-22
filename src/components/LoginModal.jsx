import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { usePage } from '../hooks/usePage'
import authServices from '../services/authServices'
import userServices from '../services/userServices'

function LoginModal() {
    const [isFetching, setIsFetching] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const { isOpenLoginModal,
        setisOpenLoginModal, user, setUser } = usePage()
    const [form, setForm] = useState({})

    const onSubmit = async () => {
        try {
            setIsFetching(true)
            const result = await authServices.login(form)
            if (result.data) {
                localStorage.setItem('token', JSON.stringify(result.data))

                const user = await userServices.getInfo()
                if (user.data) {
                    localStorage.setItem('user', JSON.stringify(user.data))
                    setUser(user.data)
                    setisOpenLoginModal(false)
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

    return ReactDOM.createPortal(
        <div className="popup-form popup-login" style={{ display: isOpenLoginModal ? 'flex' : 'none' }}>
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng nhập</h2>
                    <input onChange={(e) => form.username = e.currentTarget.value} type="text" placeholder="Email / Số điện thoại" />
                    <input onChange={(e) => form.password = e.currentTarget.value} type="password" placeholder="Mật khẩu" />
                    {
                        errorMessage && <p className='error-text' style={{ color: 'red' }}>{errorMessage}</p>
                    }
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={onSubmit}>đăng nhập</div>
                    <div className="text-register">
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="img/google.svg" alt="" />
                            Google
                        </div>
                    </div>
                    <div onClick={() => { setisOpenLoginModal(false) }} className="close">
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
                {/* email form */}
            </div>
        </div>, document.body
    )
}

export default LoginModal