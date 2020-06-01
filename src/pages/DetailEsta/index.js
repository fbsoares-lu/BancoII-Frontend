import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Product extends Component {
    state = {
        product: [],
    }

    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await api.get(`/estaciona/${id}`);
        this.setState({ product: response.data });
        console.log(response);
    }
    render() {
        
        return (
            <div className="products-list">
                {this.state.product.map(prod => (
                   <article key={prod.codigo}>
                    <p><span>Placa: </span>{prod.placa}</p>
                    <p><span>Nome Cliente: </span>{prod.nome}</p>
                    <p><span>CPF: </span>{prod.cpf}</p>
                    <p><span>Data de nascimento: </span>{prod.dtNasc}</p>
                    <p><span>Modelo: </span>{prod.descricao}</p>
                    <p><span>Código de acesso: </span>{prod.codigo}</p>
                   </article>
                ))}
            </div>
        )
    }
}