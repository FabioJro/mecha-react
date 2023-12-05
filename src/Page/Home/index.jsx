import React from 'react'
import Intro from '../../components/Intro'
import Header from '../../components/Header'
import Style from './home.module.css'

const index = () => {
  return (
    <div className ={Style.home}>
      <div>
        <Header />
        <Intro />
      </div>3
    </div>
  )
}

export default index