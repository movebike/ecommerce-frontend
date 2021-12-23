import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Product from '../components/Product'

import { getProducts } from '../services/products'

export default function Home () {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const response = await getProducts()
    if (response.status === 200) {
      setProducts(response.data.data.products)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Layout>
      <main className='container'>
        <div className='row'>
          {
            products.map(({ id, name, description, price, stock, picture, lastRode, speed, limit }, key) => (
              <div key={key} className='col-12 col-md-6 col-xl-3 mt-5'>
                <Product id={id} name={name} description={description} price={price} stock={stock} picture={picture} lastRode={lastRode} speed={speed} limit={limit} />
              </div>
            ))
          }

        </div>
      </main>
    </Layout>
  )
}
