import React from 'react'
import {createContext} from 'react'
import {useState} from 'react'

export const context=createContext()

const Context = ({children}) => {
    const [value,setValue]=useState(true)
  return (
    <context.Provider value={{value,setValue}}>
     {children}
    </context.Provider>
  )
}

export default Context
