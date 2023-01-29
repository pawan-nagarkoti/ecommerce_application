import Products from "./Products";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [number, setNumber] = useState(3);
  const loadMore = () => {
    setNumber(number + 3);
  }
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h4 style={{ textAlign: 'center', margin: '1rem 0' }}>Welcome to shoping website</h4>
          <h5 style={{ textAlign: 'center', margin: '1rem 0' }}>Product List</h5>
          <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', gap: '1rem', flexWrap: 'wrap', margin: '1rem 0' }}>
            <Products homePageProduct={true} number={number} />
          </div>
          {
            number < 6 &&
            <h5 onClick={loadMore} style={{ margin: 'auto', border: '1px solid black', width: 'max-content', borderRadius: '.2rem', padding: '.5rem', cursor: 'pointer', fontSize: '16px' }} >Load More</h5>
          }
          {
            number >= 6 &&
            <Link to='/productlist' style={{textDecoration: 'none'}}>
              <h5 style={{ margin: 'auto', border: '1px solid black', width: 'max-content', borderRadius: '.2rem', padding: '.5rem', cursor: 'pointer', fontSize: '16px', color: 'black' }}>
                Show More Product
              </h5>
            </Link>
          }
        </div>
      </div>
    </>
  )
}

export default Home