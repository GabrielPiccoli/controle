import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithRelease() {
  return fetch(`${URL_CATEGORIES}?_embed=lancamentos`)
    .then(async (respostaServidor) => {
      const resposta = await respostaServidor.json();
      return resposta;
    })
}

export default {
  getAllWithRelease
}