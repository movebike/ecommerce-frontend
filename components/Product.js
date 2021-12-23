import React from 'react'

export default function Product ({ id, name = 'Suzuki Lets 125', description = 'description', price = 80, stock = 5, lastRode = 2.5, speed = 2.5, limit = 95, picture = '/moto-picture.svg' }) {
  const handleClick = id => {
    //
  }

  return (
    <article className='product-card'>
      <header className='product-card__header'>
        <img src={picture} alt='' className='product-card__header-img' />
        <section className='product-card__header-selected_days'>
          <button>+</button>
          <p>10 </p>
          <span>Days</span>
          <button>-</button>
        </section>
      </header>
      <section className='product-card__body'>
        <div className='product-card__body-detail'>
          <p><img src='/stock-icon.svg' alt='' /> {stock} in stock</p>
          <p><img src='/star-icon.svg' alt='' /> 5.0</p>
        </div>
        <div className='product-card__body-description'>
          <div className='description'>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <div className='technical'>
            <div className='option'>
              <img src='/point-icon.svg' alt='' />
              <label htmlFor=''>LAST RODE <br /> <span>{lastRode} Km</span> </label>
            </div>
            <div className='option'>
              <img src='/point-icon.svg' alt='' />
              <label htmlFor=''>SPEED <br /> <span>{speed} Km/h</span></label>
            </div>
            <div className='option'>
              <img src='/point-icon.svg' alt='' />
              <label htmlFor=''>LIMIT <br /> <span>{limit} Kg</span></label>
            </div>
          </div>
        </div>

      </section>
      <section className='product-card__footer'>
        <div className='price'> <p>${price} USD</p> <small>per day</small> </div>
        <button onClick={() => handleClick(id)}>Add to cart <img src='/cart-icon.svg' alt='' /> </button>
      </section>
    </article>
  )
}
