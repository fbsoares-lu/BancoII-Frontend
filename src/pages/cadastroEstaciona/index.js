import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css'

export default class CadastroEstaciona extends Component {
    state = {
        
        patio: '',
        veiculoPlaca: '',
        dtEntrada: '',
        dtSaida: '',
        codigo: ''
        ,
        products: [],
    };


    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        api.post('/estaciona', {
            patio: this.state.patio,
            veiculoPlaca: this.state.veiculoPlaca,
            dtEntrada: this.state.dtEntrada,
            dtSaida: this.state.dtSaida,
            codigo: this.state.codigo
        }).then(response => {
            console.log(response)
            this.setState({
                products: [...this.state.products, [this.state.patio, this.state.veiculoPlaca, this.state.dtEntrada, this.state.dtSaida, this.state.codigo]],
                patio: '',
                veiculoPlaca: '',
                dtEntrada: '',
                dtSaida: '',
                codigo: ''
            })
            alert("Dados foram cadastrados!");
        }).catch(error => {
            console.log(error)
            alert("Os Dados não foram preenchidos corretamente!");
        })
        
    }
    
    render() {
        return(
            <>
                <div className="createCar1">
                    <h1>Cadastro no estacionamento</h1>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <p>Patio</p>
                            <input 
                            type="text" 
                            name="patio" 
                            value={this.state.patio}
                            onChange={this.changeHandler}
                            placeholder=" Informe o número do pátio" />
                        </div>

                        <div>
                            <p>Placa veículo</p>
                            <input 
                            type="text" 
                            name="veiculoPlaca" 
                            value={this.state.veiculoPlaca}
                            onChange={this.changeHandler}
                            placeholder=" Informe a placa do carro" />
                        </div>

                        <div>
                            <p>Data de Entrada</p>
                            <input 
                            type="text" 
                            name="dtEntrada" 
                            value={this.state.dtEntrada}
                            onChange={this.changeHandler}
                            placeholder=" Informe a data de entrada"  />
                        </div>

                        <div>
                            <p>Data de Saída</p>
                            <input 
                            type="text" 
                            name="dtSaida" 
                            value={this.state.dtSaida}
                            onChange={this.changeHandler}
                            placeholder=" Informe a data de saída"  />
                        </div>

                        <div>
                            <p>Código</p>
                            <input 
                            type="text" 
                            name="codigo" 
                            value={this.state.codigo}
                            onChange={this.changeHandler}
                            placeholder=" Informe o código de entrada"  />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

