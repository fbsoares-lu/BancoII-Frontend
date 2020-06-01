import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Veiculo extends Component{
    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/veiculo');
        console.log(response.data);
        this.setState({ products: response.data });
    };

    render() {
        const {products} = this.state;
        return (
            <>
                
                <div className="products-list">
                    {products.map(product => (
                    <article key={product.placa}>
                        <strong>{product.placa}</strong>
                        <p><span>Código Veículo: </span>{product.modelo_codMod}</p>
                        <p><span>CPF cliente: </span>{product.cliente_cpf}</p>
                        <p><span>Cor veículo: </span>{product.cor}</p>
                        <Link to={`/detailsVeiculo/${product.placa}`}>Detalhes</Link>
                    </article>
                    ))}
                </div>
            </>
        )
    }
}

