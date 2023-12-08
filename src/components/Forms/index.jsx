
import React, { useState } from 'react'
import Style from './forms.module.css';
import { useNavigate } from "react-router-dom";


const Index = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [sexo, setSexo] = useState('');
    const cadastro = (e) => {
        e.preventDefault();
        const objPessoa = {
            name,
            senha,
            email,
            sexo,
        }
        const objPessoaJson = JSON.stringify(objPessoa);
        localStorage.setItem('user', objPessoaJson)

        //const pessoaReturn = JSON.parse(localStorage.getItem('user'))

        objPessoa.name && navigate('/User')
        

    }

    return (
        <div className={Style.container}>
            <h1 className={Style.titulo} >MECHA <strong className={Style.titulo2}>START</strong></h1>
            <form className={Style.teste}>
                <label className={Style.label} id="Nome" for="Nome">Nome</label>
                <input className={Style.input} type="text" name="Nome" placeholder="Insira o seu nome completo" onChange={(e) => { setName(e.target.value) }}></input>
                <label className={Style.label} id="Email" for="E-mail">E-mail</label>
                <input className={Style.input} type="text" name="E-mail" placeholder="Insira o seu e-mail" onChange={(e) => { setEmail(e.target.value) }}></input>
                <label className={Style.label} id="Senha" for="Senha">Senha</label>
                <input className={Style.input} type="password" name="Senha" placeholder="Insira sua senha" onChange={(e) => { setSenha(e.target.value) }}></input>
                <label className={Style.label} id="Senha" for="Senha">Confirme sua senha</label>
                <input className={Style.input} type="password" name="Senha" placeholder="Insira sua senha novamente" onChange={(e) => { setSenha(e.target.value) }}></input>
                <label className={Style.label} for="Sexo">Sexo</label>
                <select className={Style.sexo} name="sexo" onChange={(e) => { setSexo(e.target.value) }}>
                    <option className={Style.sx} value="Escolha um sexo" >Escolha um sexo</option>
                    <option className={Style.sx} value="Masculino" >Masculino</option>
                    <option className={Style.sx} value="Feminino">Feminino</option>
                    <option className={Style.sx} value="Nao Binario" >Nao Binario</option>
                </select>
                <div className={Style.containerbutton}>
                <button onClick={cadastro} className={Style.butcadastro}>Cadastrar</button>
                </div>
            </form>

        </div>


    )
}

export default Index


