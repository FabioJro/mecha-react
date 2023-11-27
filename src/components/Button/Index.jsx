import Style from "./button.module.css"
import React from 'react'

const Button = ({texto}) => {
  return (
    <button className={Style.button}>{texto}</button>
  )
}

export default Button