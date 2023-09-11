import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.133:3000",
});

// Adicione um interceptor de resposta para capturar erros globalmente
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.request && error.request.status === 0) {
      console.error("Erro de conexão com o servidor");
      // Faça algo para lidar com a falha de conexão, como mostrar uma mensagem ao usuário.
    } else if (error.response) {
      console.error("Erro de resposta da API:", error.response.status);
      // Outro tratamento de erro para erros de resposta HTTP
    } else {
      console.error("Erro inesperado:", error.message);
      // Tratamento de erro para outros casos inesperados
    }
    return Promise.reject(error);
  }
);







export default api;
