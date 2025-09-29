import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export const buscarProjetosDoUsuario = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos?sort=updated`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar projetos do GitHub:', error);
    return [];
  }
};
