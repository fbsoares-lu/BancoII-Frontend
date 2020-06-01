import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Estaciona extends Component{
    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/estaciona');
        this.setState({ products: response.data });
    };

    render() {
        const {products} = this.state;
        return (
            <div className="products-list">
                {products.map(product => (
                   <article key={product.codigo}>
                       <strong>{product.veiculo_Placa}</strong>
                    <p><span>Data de Entrada: </span>{product.dtEntrada}</p>
                    <p><span>Data de Saída: </span>{product.dtSaida}</p>
                    <p><span>Pátio: </span>{product.Patio_num}</p>
                    <Link to={`/details/${product.codigo}`}>Detalhes</Link>
                   </article>
                ))}
            </div>
        )
    }
}


/**
 * carne acebolada
 * temaki grande de salmao com kani com cream chease
 * temaki grande de skin
 * yakisoba grande
 * sunomono de misto
 */
