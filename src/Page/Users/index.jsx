import React from 'react'

import Usuario from '../../components/Usuario'
import Header from '../../components/Header'
import Style from './user.module.css'

const index = () => {

   

    return (

        <div className={Style.user}>
            <div>
                <Header />
                <Usuario />
            </div>
        </div>
    )
}

export default index