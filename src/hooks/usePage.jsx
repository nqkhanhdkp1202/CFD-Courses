import { createContext, useContext, useState } from "react"
import React from 'react'

const Context = React.createContext()

export function PageProvider({ children }) {
    const [isOpenLoginModal, setisOpenLoginModal] = useState(false)
    const [user, setUser] = useState(() => {
        const user = localStorage.getItem('user')
        if (user) return JSON.parse('user')
        return null
    })
    const [isOpenSignupModal, setisOpenSignupModal] = useState(false)
    return (
        <Context.Provider value={{
            isOpenLoginModal,
            setisOpenLoginModal,
            user,
            setUser
        }}>{children}</Context.Provider>
    )
}

export const usePage = () => useContext(Context)
