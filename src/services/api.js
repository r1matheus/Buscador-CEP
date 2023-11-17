import axios from"axios"

//02324080/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;