import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias'

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithRelease()
      .then((categoriasComLancamentos) => {
        setDadosIniciais(categoriasComLancamentos);
      })
  }, [])
  
  return (
    <>
      <PageDefault>
        {JSON.stringify(dadosIniciais)}
      </PageDefault>
    </>
  );
}

export default Home;
