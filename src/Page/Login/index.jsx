import React from 'react'
import Header from '../../components/Header'
import FormLogin from '../../components/FormLogin'
import Style from './login.module.css'

const index = () => {
  return (
    <div className={Style.login}>
      <div>
        <Header />
        <FormLogin/>
        
      </div>
    </div>
  )
}

export default index