import { createContext, useState, useEffect } from 'react'
import { createCart } from '../services/cart'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState({})

  const create = async (data) => {
    const response = await createCart(data)
    if (response.status === 200) {
      setCart(response.data.data, cart)
    }
  }

  const addItems = async (id) => {

  }

  useEffect(() => {
    //
  }, [])

  const data = { items, setItems, cart, create }
  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}
