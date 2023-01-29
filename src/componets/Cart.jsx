import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem ,getCartTotal, increment, decrement} from '../features/cartSlice'
const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();
  const removeCart = (id) => {
    dispatch(removeCartItem(id))
  }
  useEffect(() => {
    dispatch(getCartTotal())
  },[]);
  const incrementValue = (id)=>{
    dispatch(increment(id))
  }
  return (
    <>
      <div className="container-fluid my-5">
        {
          cartData.length > 0 &&
          <div className="container" style={{ display: 'flex' }}>
            <div style={{ width: '54rem' }}>
              {
                cartData.map(({ id, title, quality, image, price }, index) =>
                  <div style={{ margin: '1rem 0' }} key={index}>
                    <span>Product Name: {title}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                      <img src={image} className="card-img-top" alt="..." style={{ width: '160px', height: '100px' }} />
                      <span>Quantity: {quality}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button onClick={()=> incrementValue(id)} style={{ border: 'none', outline: 'none', borderRadius: '.3rem', padding: '.4rem .8rem', backgroundColor: 'pink' }}>-</button>
                        <span>{quality}</span>
                        <button style={{ border: 'none', outline: 'none', borderRadius: '.3rem', padding: '.4rem .8rem', backgroundColor: 'pink' }}>+</button>
                      </div>
                      <span>Price: {price}</span>
                      <button onClick={() => removeCart(id)} style={{ border: 'none', outline: 'none', borderRadius: '.3rem', padding: '.4rem .8rem', backgroundColor: 'pink', fontSize: '14px' }}>Remove</button>
                    </div>
                  </div>
                )
              }
            </div>
            <div style={{ border: '1px solid #707070', width: '15rem', position: 'fixed', right: '100px', textAlign: 'center', borderRadius: '.3rem' }}>
              <p>Product total</p>
              <hr />
              <p>Quantity: 2</p>
              <p>Total Amount : 1000</p>
              <hr />
              <p>Checkout</p>
            </div>
          </div>
        }
        {
          cartData.length === 0 &&
          <div className="container">
            <h4 style={{ textAlign: 'center' }}> Please add item on cart. </h4>
          </div>
        }
      </div>
    </>
  )
}

export default Cart