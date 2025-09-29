import axios from 'axios';

const DEVTO_API_URL = 'https://dev.to/api';

export const buscarArtigosDoUsuario = async (username) => {
  try {
    const response = await axios.get(`${DEVTO_API_URL}/articles?username=${username}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar artigos do Dev.to:', error);
    return [];
  }
};
