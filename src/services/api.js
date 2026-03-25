import axios from 'axios'; // Biblioteca para fazer requisições HTTP (GET, POST, etc.)

// Cria uma instância do axios com a URL base da API

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default api;

