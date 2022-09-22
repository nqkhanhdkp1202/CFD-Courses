import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export default function CourseProvider({ children }) {
    const [id, setID] = useState('')
    return (
        <Context.Provider value={{ id, setID }}>{children}</Context.Provider>
    )
}

export const useCourse = () => useContext(Context)