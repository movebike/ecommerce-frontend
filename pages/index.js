
import Layout from '../components/Layout'
import Product from '../components/Product'

export default function Home () {
  return (
    <Layout>
      <main className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-3 mt-5'>
            <Product />
          </div>
          <div className='col-12 col-md-6 col-xl-3 mt-5'>
            <Product />
          </div>
          <div className='col-12 col-md-6 col-xl-3 mt-5'>
            <Product />
          </div>
          <div className='col-12 col-md-6 col-xl-3 mt-5'>
            <Product />
          </div>
          <div className='col-12 col-md-6 col-xl-3 mt-5'>
            <Product />
          </div>
          <div className='col-12 col-md-6 col-xl-3 mt-5'>
            <Product />
          </div>
          <div className='col-12 col-md-6 col-xl-3 mt-5'>
            <Product />
          </div>
        </div>
      </main>
    </Layout>
  )
}
