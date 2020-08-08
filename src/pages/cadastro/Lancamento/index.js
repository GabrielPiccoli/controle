import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import lancamentoRepository from '../../../repositories/lancamentos'
import categoriaRepository from '../../../repositories/categorias'

function CadastroLancamento() {
  const [categorias, setCategorias] = useState([]);
  const categoryNames = categorias.map(({ nome }) => nome);
  const { handleChange, values, clearForm } = useForm({
    data: '',
    categoria: '',
    valor: ''
  });

  useEffect(() => {
    categoriaRepository
      .getAll()
      .then((categorias) => {
        setCategorias(categorias);
      }) 
  }, []);


  return (
    <PageDefault>
      <h1>Cadastro de Lançamento</h1>
      <form onSubmit={ function handleSubmit(e) {
        e.preventDefault();
        
        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.nome === values.categoria
        });

        lancamentoRepository.create({
          data: values.data,
          valor: values.valor,
          categoriaId: categoriaEscolhida.id
        });

        clearForm();
      }}>
        <FormField
          label=""
          type= "date"
          value={values.data}
          name="data"
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          value={values.categoria}
          name="categoria"
          onChange={handleChange}
          suggestions={ categoryNames }
        />
        
        <FormField
          label="Valor R$"
          type="number"
          value={values.valor}
          name="valor"
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroLancamento;