import axios from 'axios'

// requisitando minha api criada com nodejs
// usar na requisição o http quando for fazer requisição local
// const api = axios.create({ baseURL: 'http://localhost:3003/api' })
const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api' })


export default api