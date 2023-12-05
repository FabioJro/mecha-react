import React from 'react'
import Style from './about.module.css'

const index = () => {
  return (
    <main className={Style.apresentacao}>
      <section className={Style.apresentacao_conteudo}>
        <h1 className={Style.titulo} >MECHA <strong className={Style.titulo2}>START</strong></h1>
        <p className={Style.text_jogo}>
          Jogo desenvolvido pela compainha Fabson Games , na qual tenta desenvolver o maximo de jogos estilo Mecha para abranger todo publico que gosta do jogo.
          Testados em modo alpha e beta e conseguindo os melhores resultados com seus clientes , voce vai ter um jogo otimo e que consegue trazer a tona todo estilo de rpg e criação de peron mecha
        </p>
      </section>
    </main>
  )
}

export default index