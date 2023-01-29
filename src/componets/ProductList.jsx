import React from 'react'
import Products from './Products';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CategorySearchButton from './CategorySearchButton'


const ProductList = () => {
  const product = useSelector((state) => state.cart.product);
  const [searchValue, setSearchValue] = useState('');
  const [buttonValue, setButtonValue] = useState('');
  const searchBoxValue = (e) => {
    setSearchValue(e.target.value)
  }
  const searchProductList = product.filter((item) => {
    return item.category === searchValue;
  })

  const searchDataThroughButtonClicked = (item) => {
    setButtonValue(item)
  }

  const searchDataByButtonClicked = product.filter((item) => {
    return item.category === buttonValue;
  })
  
  return (
    <>
      <div className="container-fluid my-5">
        <div className="container" style={{ display: 'flex' }}>
          <div style={{ width: '20rem', position: 'fixed' }}>
            <h5>Please search the product on the basis of given list</h5>
            <ul>
              <li>men's clothing</li>
              <li>jewelery</li>
              <li>electronics</li>
              <li>women's clothing</li>
            </ul>
            <input type='search' placeholder='search category...' onChange={(e) => searchBoxValue(e)} />
            <div className='my-4'>
              <h5>Category Wise Search</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {
                  CategorySearchButton.map(({ name, value }, index) =>
                    <div key={index}>
                      <button type="button" className="btn btn-outline-warning" onClick={() => searchDataThroughButtonClicked(value)}>{name}</button>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          <div style={{ width: '46rem', position: 'sticky', left: '32rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Products searchProductList={searchProductList} searchDataByButtonClicked={searchDataByButtonClicked} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList