import React from 'react';
import './styles.css';

export default function Header() {
    return(
        <header id="main-header">
            <a href="/"><h1>Local<span>Estaciona</span></h1></a>
            <nav>
                <ul>
                    <li><a href="/estaciona">Listar local</a></li>
                    <li><a href="/cadastroEsta">Cadastrar local</a></li>
                    <li><a href="/cadastroCarro">Cadastrar veículo</a></li>
                    <li><a href="/listarVeiculo">Listar veículo</a></li>
                    <li><a href="/procedure">Total vezes</a></li>
                </ul>
            </nav>
        </header> 
    ); 
       
};