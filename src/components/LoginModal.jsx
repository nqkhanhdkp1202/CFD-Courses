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
                        <h2 className="title">????ng nh???p</h2>
                        <input onChange={(e) => formLogin.username = e.currentTarget.value} type="text" placeholder="Email / S??? ??i???n tho???i" />
                        <input onChange={(e) => formLogin.password = e.currentTarget.value} type="password" placeholder="M???t kh???u" />
                        {
                            errorMessage && <p className='error-text' style={{ color: 'red' }}>{errorMessage}</p>
                        }
                        <div className="remember">
                            <label className="btn-remember">
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <p>Nh??? m???t kh???u</p>
                            </label>
                            <a href="#" className="forget">Qu??n m???t kh???u?</a>
                        </div>
                        <div className="btn rect main btn-login" onClick={onLogin}>????ng nh???p</div>
                        <div className="text-register">
                            <strong>ho???c ????ng k?? b???ng</strong>
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
                    <h2 className="title">????ng k??</h2>
                    <div className="tab1">
                        <label>
                            <p>Email<span>*</span></p>
                            <input onChange={(e) => formRegister.username = e.currentTarget.value} type="text" placeholder="Email" />
                        </label>
                        <label>
                            <p>M???t kh???u<span>*</span></p>
                            <input onChange={(e) => formRegister.password = e.currentTarget.value} type="password" placeholder="M???t kh???u" />
                        </label>
                        <label>
                            <p>H??? v?? t??n<span>*</span></p>
                            <input onChange={(e) => formRegister.name = e.currentTarget.value} type="text" placeholder="H??? v?? t??n" />
                        </label>
                        {
                            errorMessage && <p className='error-text' style={{ color: 'red' }}>{errorMessage}</p>
                        }
                        <div className="btn main rect" onClick={onRegister}>????NG K??</div>
                    </div>
                    <p className="policy">
                        B???ng vi???c ????ng k??, b???n ???? ?????ng ?? <a href="#">??i???u kho???n b???o m???t</a> c???a CFD
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