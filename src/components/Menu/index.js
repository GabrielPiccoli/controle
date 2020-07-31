import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="controle de gastos" />
      </a>

      <div className="buttons">
        <Button as="a" className="ButtonLink" href="/">
          Nova Categoria
        </Button>

        <Button as="a" className="ButtonLink" href="/">
          Novo Lançamento
        </Button>
      </div>
    </nav>
  );
}

export default Menu; 