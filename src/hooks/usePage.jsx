import { createContext, useContext, useEffect, useState } from "react"
import React from 'react'
import userServices from "../services/userServices"

const Context = React.createContext()

export function PageProvider({ children }) {
    const [isOpenLoginModal, setisOpenLoginModal] = useState(false)
    const [isOpenRegister, setIsOpenRegister] = useState(false)
    return (
        <Context.Provider value={{
            isOpenLoginModal,
            setisOpenLoginModal,
            isOpenRegister,
            setIsOpenRegister,
        }}>{children}</Context.Provider>
    )
}

export const usePage = () => useContext(Context)
