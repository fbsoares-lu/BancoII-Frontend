import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Estaciona from './pages/estaciona';
import cadastroCarro from './pages/cadastroCarro';
import MenuPrincipal from './pages/principal';
import Veiculo from './pages/veiculo';
import cadastroEsta from './pages/cadastroEstaciona';
import details from './pages/DetailEsta';
import detailsVeiculo from './pages/DetailVeiculo';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MenuPrincipal} />
            <Route path="/listarVeiculo" component={Veiculo} />
            <Route path="/cadastroCarro" component={cadastroCarro} />
            <Route path="/estaciona" component={Estaciona} />
            <Route path="/cadastroEsta" component={cadastroEsta} />
            <Route path="/details/:id" component={details} />
            <Route path="/detailsVeiculo/:'id'" component={detailsVeiculo} />
        </Switch>
    </BrowserRouter>
);

export default Routes;