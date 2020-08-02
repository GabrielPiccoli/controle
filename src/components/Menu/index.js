import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="controle de gastos" />
      </Link>

      <div className="buttons">
        <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
          Nova Categoria
        </Button>

        <Button as={Link} className="ButtonLink" to="/cadastro/lancamento">
          Novo Lançamento
        </Button>
      </div>
    </nav>
  );
}

export default Menu; 