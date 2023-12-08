
import React from 'react'
import Header from '../../components/Header'
import About from '../../components/About'
import Style from './about.module.css'

const index = () => {
  return (
    <div className={Style.about}>
      
        <Header />
        <div className={Style.containerconteudo}>
        <About />
      </div>
    </div>
  )
}

export default index