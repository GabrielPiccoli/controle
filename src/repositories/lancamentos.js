import config from '../config'

const URL_LANCAMENTOS = `${config.URL_BACKEND}/lancamentos`;

function create(lancamento) {
  return fetch(`${URL_LANCAMENTOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(lancamento)
  })
    .then(async (respostaServidor) => {
      const resposta = await respostaServidor.json();
      return resposta;
    })
}

export default {
  create, 
}