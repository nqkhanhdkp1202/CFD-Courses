import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const MainContext = createContext()

export default function MainProvider({ children }) {
    const [user, setUser] = useState({
        status: false
    })
    return (
        <MainContext.Provider value={{ user, setUser }}>
            {children}
        </MainContext.Provider>
    )
}
