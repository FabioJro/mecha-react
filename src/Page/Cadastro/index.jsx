import React from 'react'
import Header from '../../components/Header'
import Forms from '../../components/Forms'
import Style from './cadastro.module.css'

const index = () => {
  return (
    <div className={Style.cadastro}>

      <Header />
      <div className={Style.containerconteudo}>
        <Forms />
      </div>
    </div>
  )
}

export default index