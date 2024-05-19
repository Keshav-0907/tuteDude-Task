import React from 'react'
import './Button.css'

const Button = ({children}) => {
  return (
    <button className='button-main'>
        {children}
    </button>
  )
}

export default Button