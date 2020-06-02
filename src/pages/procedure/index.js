import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css'

export default class Procedure extends Component {
    state={
        placa: '',
        estacionamento: '',
        products: []
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        api.post('/vezesestacionado', {
            placa: this.state.placa,
            estacionamento: this.state.estacionamento,
        }).then(response => {
            this.setState({products: response.data[0]});
            console.log(this.state.products);
        }).catch(error => {
            console.log(error)
            alert("Dados não foram preenchidos corretamente!");
        })
        
    }
    
    render(){
        return(
            <>
                <div className="createCar2">
                    <h1>Vezes Estacionado</h1>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <p>Placa</p>
                            <input 
                            type="text" 
                            name="placa" 
                            value={this.state.placa}
                            onChange={this.changeHandler}
                            placeholder=" Informe o número da placa" />
                        </div>

                        <div>
                            <p>Estacionamento</p>
                            <input 
                            type="text" 
                            name="estacionamento" 
                            value={this.state.estacionamento}
                            onChange={this.changeHandler}
                            placeholder=" Informe a descrição do estac." />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="products-list1">
                    {this.state.products.map(product => (
                    <article key={product.placa}>
                        <p><span>Veículo com placa {product.placa} estacionou: </span>{product.Estacionou} vezes</p>
                        <p><span>Cliente: </span>{product.nome}</p>
                        <p><span>CPF cliente: </span>{product.cpf}</p>
                        <p><span>Cor veículo: </span>{product.cor}</p>
                        <p><span>Modelo veículo: </span>{product.descricao}</p>
                        <p><span>Total de vagas: </span>{product.Lotação}</p>
                        <p><span>Local estacionamento: </span>{product.endereco}</p>
                    </article>
                    ))}
                </div>
            </>
        );
    }
}