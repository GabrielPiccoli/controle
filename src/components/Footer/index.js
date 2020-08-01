import React from 'react';
import Facebook from '../../assets/img/logo-facebook.png';
import Linkedin from '../../assets/img/logo-linkedin.png';
import Github from '../../assets/img/logo-github.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <div className="icones">
        <a href="https://www.facebook.com/gabriel.piccoli.1">
          <img className="icones-sociais" src={Facebook} alt="Logo Facebook"></img>
        </a>
        <a href="https://github.com/GabrielPiccoli">
          <img className="icones-sociais" src={Github} alt="Logo Github"></img>
        </a>
        <a href="https://www.linkedin.com/in/gabriel-piccoli-144756103/">
          <img className="icones-sociais" src={Linkedin} alt="Logo Linkedin"></img>
        </a>
      </div>
    </FooterBase>
  );
}

export default Footer;
