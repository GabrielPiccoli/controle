import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);  

  useEffect(() => {
    categoriasRepository.getAllWithRelease();
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={ function handleSubmit(e) {
        e.preventDefault();
        categoriasRepository.create({
          nome: values.nome,
          cor: values.cor,
        });

        clearForm()
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
            <li key={categoria} style={{color: categoria.cor }}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
    </PageDefault>
  )
}

export default CadastroCategoria;