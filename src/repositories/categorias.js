import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaServidor) => {
      const resposta = await respostaServidor.json()
      return resposta;
    })
}

function getAllWithRelease() {
  return fetch(`${URL_CATEGORIES}?_embed=lancamentos`)
    .then(async (respostaServidor) => {
      const resposta = await respostaServidor.json();
      return resposta;
    })
}

function create(categoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoria)
  })
    .then(async (respostaServidor) => {
      const resposta = await respostaServidor.json();
      return resposta;
    })
}

export default {
  getAll,
  getAllWithRelease,
  create
}