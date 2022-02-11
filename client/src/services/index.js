import Axios from 'axios'

const Client = Axios.create({ baseURL: 'http://localhost:8000/products' })

export default Client