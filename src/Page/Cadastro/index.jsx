import React from 'react'
import Header from '../../components/Header'
import Forms from '../../components/Forms'
import Style from './cadastro.module.css'

const index = () => {
  return (
    <div>
      <div className={Style.cadastro}>
        <Header />
        <Forms />
      </div>
    </div>
  )
}

export default index