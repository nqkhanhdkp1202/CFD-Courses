import { createContext, useContext, useEffect, useState } from "react"
import React from 'react'
import userServices from "../services/userServices"

const Context = React.createContext()

export function PageProvider({ children }) {
    const [isOpenLoginModal, setisOpenLoginModal] = useState(false)
    const [isOpenRegister, setIsOpenRegister] = useState(false)
    const [user, setUser] = useState(() => {
        let user = localStorage.getItem('user')
        if (user) {
            user = JSON.parse(user)
            return user
        }
        return null
    })

    useEffect(() => {
        (
            async () => {
                let token = localStorage.getItem('token')
                if (token) {
                    const user = await userServices.getInfo()
                    localStorage.setItem('user', JSON.stringify(user.data))
                    setUser(user.data)
                }
            }
        )()
    }, [])
    return (
        <Context.Provider value={{
            isOpenLoginModal,
            setisOpenLoginModal,
            isOpenRegister,
            setIsOpenRegister,
            user,
            setUser
        }}>{children}</Context.Provider>
    )
}

export const usePage = () => useContext(Context)
