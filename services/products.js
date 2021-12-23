import { instance as axios } from './config'

function getProducts () {
  return axios.get('/products', { headers: { 'Content-Type': 'application/json' } })
}

export {
  getProducts
}
