import React from 'react'
import Intro from '../../components/Intro'
import Header from '../../components/Header'
import Style from './home.module.css'

const index = () => {
  return (
    <div className={Style.home}>

      <Header />
      <div className={Style.containerconteudo}>
        <Intro />
      </div>
    </div>
  )
}

export default index