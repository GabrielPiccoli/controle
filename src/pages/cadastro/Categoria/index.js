import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    cor: '',
  };
  
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    })
  };

  function handleChange(e) {
    //const { getAttribute, value } = e.target;
    setValue(e.target.getAttribute('name'), e.target.value);
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={ function handleSubmit(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={categoria}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
    </PageDefault>
  )
}

export default CadastroCategoria;