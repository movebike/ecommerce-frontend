import React from 'react'
import Layout from '../components/Layout'

export default function Cart () {
  return (
    <Layout>
      <main className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6 mt-5'>
            <section className='card-cart'>
              <section className='card-cart__header'>
                <h2>Mis productos agregados</h2>
                <div className='options'>
                  <p>10 Productos en el carrito</p>
                  <button>Vaciar</button>
                </div>
              </section>
              <section className='card-cart__body'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <div className='item'>
                      <div className='circle'>
                        <img src='/moto-picture.svg' alt='moto' />
                      </div>
                      <div className='detail'>
                        <p>Deku Pop</p>
                      </div>
                      <div className='price d-flex flex-column justify-content-start align-items-end'>
                        <p>$190.00</p>
                        <button><img src='/remove-icon.svg' alt='' /></button>
                      </div>
                    </div>
                  </li>
                  <li className='list-group-item'>
                    <div className='item'>
                      <div className='circle'>
                        <img src='/moto-picture.svg' alt='moto' />
                      </div>
                      <div className='detail'>
                        <p>Deku Pop</p>
                      </div>
                      <div className='price d-flex flex-column justify-content-start align-items-end'>
                        <p>$190.00</p>
                        <button><img src='/remove-icon.svg' alt='' /></button>
                      </div>
                    </div>
                  </li>
                  <li className='list-group-item'>
                    <div className='item'>
                      <div className='circle'>
                        <img src='/moto-picture.svg' alt='moto' />
                      </div>
                      <div className='detail'>
                        <p>Deku Pop</p>
                      </div>
                      <div className='price d-flex flex-column justify-content-start align-items-end'>
                        <p>$190.00</p>
                        <button><img src='/remove-icon.svg' alt='' /></button>
                      </div>
                    </div>
                  </li>
                  <li className='list-group-item'>
                    <div className='item'>
                      <div className='circle'>
                        <img src='/moto-picture.svg' alt='moto' />
                      </div>
                      <div className='detail'>
                        <p>Deku Pop</p>
                      </div>
                      <div className='price d-flex flex-column justify-content-start align-items-end'>
                        <p>$190.00</p>
                        <button><img src='/remove-icon.svg' alt='' /></button>
                      </div>
                    </div>
                  </li>
                  <li className='list-group-item'>
                    <div className='item'>
                      <div className='circle'>
                        <img src='/moto-picture.svg' alt='moto' />
                      </div>
                      <div className='detail'>
                        <p>Deku Pop</p>
                      </div>
                      <div className='price d-flex flex-column justify-content-start align-items-end'>
                        <p>$190.00</p>
                        <button><img src='/remove-icon.svg' alt='' /></button>
                      </div>
                    </div>
                  </li>
                  <li className='list-group-item'>
                    <div className='item'>
                      <div className='circle'>
                        <img src='/moto-picture.svg' alt='moto' />
                      </div>
                      <div className='detail'>
                        <p>Deku Pop</p>
                      </div>
                      <div className='price d-flex flex-column justify-content-start align-items-end'>
                        <p>$190.00</p>
                        <button><img src='/remove-icon.svg' alt='' /></button>
                      </div>
                    </div>
                  </li>
                  <li className='list-group-item'>
                    <div className='item'>
                      <div className='circle'>
                        <img src='/moto-picture.svg' alt='moto' />
                      </div>
                      <div className='detail'>
                        <p>Deku Pop</p>
                      </div>
                      <div className='price d-flex flex-column justify-content-start align-items-end'>
                        <p>$190.00</p>
                        <button><img src='/remove-icon.svg' alt='' /></button>
                      </div>
                    </div>
                  </li>
                  <li className='list-group-item'>
                    <div className='item'>
                      <div className='circle'>
                        <img src='/moto-picture.svg' alt='moto' />
                      </div>
                      <div className='detail'>
                        <p>Deku Pop</p>
                      </div>
                      <div className='price d-flex flex-column justify-content-start align-items-end'>
                        <p>$190.00</p>
                        <button><img src='/remove-icon.svg' alt='' /></button>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>

              <section className='card-cart__total'>
                <div className='d-flex justify-content-between detail'>
                  <p>Total</p>
                  <p><span>$</span> 190.00</p>
                </div>
                <button>Pagar $190.00 USD</button>
              </section>

            </section>
          </div>
        </div>
      </main>
    </Layout>
  )
}
