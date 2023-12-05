import React from 'react'
import Style from './usuario.module.css'

const index = () => {
    const pessoaReturn = JSON.parse(localStorage.getItem('user'))
  return (
    <main className={Style.apresentacao}>
      <section className={Style.apresentacao_conteudo}>
        <h1 className={Style.titulo} >MECHA <strong className={Style.titulo2}>START</strong></h1>
        <p className={Style.text_jogo}>
          Ola , {pessoaReturn.name}
        </p>
      </section>
    </main>
  )
}

export default index