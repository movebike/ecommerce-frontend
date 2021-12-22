import React from 'react'

export default function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg bg-movebike'>
      <div className='container'>
        <a className='navbar-brand' href='#'>MoveBike</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>Login</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/cart'>
                <div className='items-cart'>
                  <img src='/cart-nav.svg' alt='' />
                  <div className='items-quantity'>0</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
