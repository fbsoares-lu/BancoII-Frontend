import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css'

export default class CadastroCarro extends Component {
    state = {
        
            placa: '',
            modelo_codMod: 0,
            cliente_cpf: '',
            cor: ''
        ,
        products: [],
    };


    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        api.post('/veiculo', {
            placa: this.state.placa,
            modelo_codMod: this.state.modelo_codMod,
            cliente_cpf: this.state.cliente_cpf,
            cor: this.state.cor
        }).then(response => {
            console.log(response)
            this.setState({
                products: [...this.state.products, [this.state.placa, parseInt(this.state.modelo_codMod),this.state.cliente_cpf,this.state.cor]],
                placa: '',
                modelo_codMod: 0,
                cliente_cpf: '',
                cor: ''
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
                <div className="createCar">
                    <h1>Cadastrar veículo</h1>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <p>Placa</p>
                            <input 
                            type="text" 
                            name="placa" 
                            value={this.state.placa}
                            onChange={this.changeHandler}
                            placeholder="Informe o número da placa" />
                        </div>

                        <div>
                            <p>Código Modelo</p>
                            <input 
                            type="text" 
                            name="modelo_codMod" 
                            value={this.state.modelo_codMod}
                            onChange={this.changeHandler}
                            placeholder="Informe o código do carro" />
                        </div>

                        <div>
                            <p>CPF</p>
                            <input 
                            type="text" 
                            name="cliente_cpf" 
                            value={this.state.cliente_cpf}
                            onChange={this.changeHandler}
                            placeholder="Informe o CPF do cliente"  />
                        </div>

                        <div>
                            <p>Cor</p>
                            <input 
                            type="text" 
                            name="cor" 
                            value={this.state.cor}
                            onChange={this.changeHandler}
                            placeholder="Informe a cor do veículo" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

