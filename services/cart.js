import { instance as axios } from './config'

function createCart (id) {
  return axios.post('/carts', id, { headers: { 'Content-Type': 'application/json' } })
}

export {
  createCart
}
