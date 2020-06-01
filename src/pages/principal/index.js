import React, {Component} from 'react';
import bdImg from '../../assets/server.svg';
import serverImg from '../../assets/encryption.svg';
import computerImg from '../../assets/computer.svg';
import './styles.css';

export default class Principal extends Component {
    render(){
        return(
            <>  
                
                <div className="menu-right">
                    <div className="primeiro">
                        <p>Projeto da disciplina de Banco de Dados II da Universidade Católica de Pernambuco.<p>Nosso banco de dados está relacionado com estacionamento para carros e motos.</p><p className="nomes">Alunos:<p> Hildemir Regis </p><p>João Pedro</p><p> Lucas Soares</p></p></p>
                    </div>
                    <img src={bdImg} width="300px" />
                </div>

                <div className="menu-center">
                    <img src={serverImg} width="300px" />
                </div>

                <div className="menu-left">
                    <article>
                        <img src={computerImg} width="300px" />
                    </article>
                </div>
            </>
        );
    };
}