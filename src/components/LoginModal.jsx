import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { usePage } from '../hooks/usePage'
import authServices from '../services/authServices'
import userServices from '../services/userServices'

function LoginModal() {
    const [isFetching, setIsFetching] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const { openLogin, openRegister } = useSelector(store => store.page)
    const [formLogin, setFormLogin] = useState({})
    const [formRegister, setFormRegister] = useState({})

    const dispatch = useDispatch();

    const onLogin = async () => {
        try {
            setIsFetching(true)
            const result = await authServices.login(formLogin)
            if (result.data) {
                localStorage.setItem('token', JSON.stringify(result.data))
                const user = await userServices.getInfo()
                if (user.data) {
                    localStorage.setItem('user', JSON.stringify(user.data))
                    dispatch({ type: 'auth/login', payload: user.data })
                    dispatch({ type: 'page/closeLogin' })
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

    const onRegister = async () => {
        try {
            setIsFetching(true)
            const result = await authServices.register(formRegister)
            dispatch({ type: 'page/closeRegister' })
            dispatch({ type: 'page/openLogin' })
        }
        catch (err) {
            setErrorMessage(err)
        }
        finally {
            setIsFetching(false)
        }
    }

    return ReactDOM.createPortal(
        <div className="popup-form popup-login" style={{ display: openLogin || openRegister ? 'flex' : 'none' }}>
            {
                openLogin ? <div className="wrap">
                    {/* login-form */}
                    <div className="ct_login" >
                        <h2 className="title">Đăng nhập</h2>
                        <input onChange={(e) => formLogin.username = e.currentTarget.value} type="text" placeholder="Email / Số điện thoại" />
                        <input onChange={(e) => formLogin.password = e.currentTarget.value} type="password" placeholder="Mật khẩu" />
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
                        <div className="btn rect main btn-login" onClick={onLogin}>đăng nhập</div>
                        <div className="text-register">
                            <strong>hoặc đăng ký bằng</strong>
                        </div>
                        <div>
                            <div className="btn btn-icon rect white btn-google">
                                <img src="img/google.svg" alt="" />
                                Google
                            </div>
                        </div>
                        <div onClick={() => dispatch({ type: 'page/closeLogin' })} className="close">
                            <img src="img/close-icon.png" alt="" />
                        </div>
                    </div>
                    {/* email form */}
                </div> : openRegister ? <div className="wrap">
                    <h2 className="title">Đăng ký</h2>
                    <div className="tab1">
                        <label>
                            <p>Email<span>*</span></p>
                            <input onChange={(e) => formRegister.username = e.currentTarget.value} type="text" placeholder="Email" />
                        </label>
                        <label>
                            <p>Mật khẩu<span>*</span></p>
                            <input onChange={(e) => formRegister.password = e.currentTarget.value} type="password" placeholder="Mật khẩu" />
                        </label>
                        <label>
                            <p>Họ và tên<span>*</span></p>
                            <input onChange={(e) => formRegister.name = e.currentTarget.value} type="text" placeholder="Họ và tên" />
                        </label>
                        {
                            errorMessage && <p className='error-text' style={{ color: 'red' }}>{errorMessage}</p>
                        }
                        <div className="btn main rect" onClick={onRegister}>ĐĂNG KÝ</div>
                    </div>
                    <p className="policy">
                        Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
                    </p>
                    <div onClick={() => dispatch({ type: 'page/closeLogin' })} className="close">
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div> : <></>
            }
        </div>, document.body
    )
}

export default LoginModal