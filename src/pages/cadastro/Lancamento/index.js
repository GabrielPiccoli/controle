import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroLancamento() {
  const valoresIniciais = {
    data: '',
    valor: '',
    categoria: ''
  };
  
  const [lancamentos, setLancamentos] = useState([]);
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

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') 
      ? 'http://localhost:8080/lancamentos'
      : 'https://controlelg.herokuapp.com/lancamentos';
    fetch(URL)
      .then(async (respostaServidor) => {
        const resposta = await respostaServidor.json();
        setLancamentos([
          ...resposta
        ])
      })
  }, [])

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') 
      ? 'http://localhost:8080/categorias'
      : 'https://controlelg.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaServidor) => {
        const resposta = await respostaServidor.json();
        setCategorias([
          ...resposta
        ])
      })
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Lançamento</h1>
      <form onSubmit={ function handleSubmit(e) {
        e.preventDefault();
        setLancamentos([
          ...lancamentos,
          values
        ]);

        setValues(valoresIniciais);
      }}>
        <FormField
          label="Data do Lançamento"
          type= "date"
          value={values.data}
          name="data"
          onChange={handleChange}
        />

        <select style={{
          background: '#53585D',
          color: '#F5F5F5',
          display: 'block',
          width: '100%',
          height: '57px',
          fontSize: '1.25em',
          
          outline: 0,
          border: 0,
          borderTop: '4px solid transparent',
          borderBottom: '4px solid #53585D',
          
          padding: '0px 16px',
          marginBottom: '45px',
          
          resize: 'none',
          borderRadius: '4px',
          transition: 'borderColor .3s',
        }}>
          {categorias.map((categoria) => {
            return (
              <option name="categoria" key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            )
          })}
        </select>
        
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
    </PageDefault>
  )
}

export default CadastroLancamento;