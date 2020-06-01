import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import cadastroCarro from './pages/cadastroCarro';
import MenuPrincipal from './pages/principal';
import Veiculo from './pages/veiculo';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MenuPrincipal} />
            <Route path="/listarVeiculo" component={Veiculo} />
            <Route path="/listarEstaciona/:id" component={Product} />
            <Route path="/cadastroCarro" component={cadastroCarro} />
            
        </Switch>
    </BrowserRouter>
);

export default Routes;