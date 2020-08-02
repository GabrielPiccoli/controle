import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Nome Categoria');

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={ function handleSubmit(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          nomeDaCategoria
        ]);
      }}>
        <label>Nome da Categoria:</label>
        <input 
          type="text"
          value={nomeDaCategoria}
          onChange={ (e) => setNomeDaCategoria(e.target.value)}
        />
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={categoria}>
              {categoria}
            </li>
          )
        })}
      </ul>
    </PageDefault>
  )
} 

export default CadastroCategoria;