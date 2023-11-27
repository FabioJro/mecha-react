 import Style from'./intro.module.css';

 export default function Intro() {

    return (
        <main className= {Style.apresentacao}>
            <section className = {Style.apresentacao_conteudo}>
                 <h1 className = {Style.titulo} >MECHA <strong className = {Style.titulo2}>START</strong></h1>
                 <p className ={Style.text_jogo}> 
                    Jogo baseado em estilo mecha turn base no qual vai trazer toda a costumisação de armas e acessorios para os seus person.
                 </p>
               Cadastre-se para jogar
             </section>
        </main>
     )
 }