import React from 'react';
import './styles.css';

export default function Header() {
    return(
        <header id="main-header">
            <h1>Local<span>Estaciona</span></h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/estaciona">Listar local</a></li>
                    <li><a href="/cadastroEsta">Cadastrar local</a></li>
                    <li><a href="/cadastroCarro">Cadastrar veículo</a></li>
                    <li><a href="/listarVeiculo">Listar veículo</a></li>
                </ul>
            </nav>
        </header> 
    ); 
       
};