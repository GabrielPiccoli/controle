import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';
import CadastroLancamento from './pages/cadastro/Lancamento'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/cadastro/lancamento" component={CadastroLancamento} />
      <Route component={Home}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

