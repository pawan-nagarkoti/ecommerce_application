import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const totalCart = useSelector((state) => state.cart.cartItem);
  return (
    <>
      <nav className="container-fluid" style={{ position: 'sticky', top: 0, background: 'pink', height: '50px', zIndex: '10' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link className="navbar-brand" to='/' style={{ color: 'black' }}>Ecommerce Website</Link>
          <Link to='/productlist' style={{ color: 'black', textDecoration: 'none' }}>Product</Link>
          <Link to='cart' style={{ color: 'black', textDecoration: 'none' }}>Cart[{totalCart.length}]</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar