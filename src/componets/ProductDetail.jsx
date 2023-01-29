import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const product = useSelector((state) => state.cart.product);
  const param = useParams();
  const productResponse = product.filter((item) => {
    return item.id === Number(param.id);
  })
  return (
    <>
      <div className="container-fluid my-5">
        <div className="container">
          {
            productResponse.map(({ category, description, image, price, title }, index) => {
              return (
                <div key={index}>
                  <h4>{category}</h4>
                  <div style={{ display: 'flex', width: '50rem', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <img src={image} width={200} height={200} />
                      <button type="button" className="btn btn-outline-warning m-3">Add To Cart</button>
                    </div>
                    <div>
                      <p>Title: {title}</p>
                      <p>Description: {description}</p>
                      <p>Price: {price}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ProductDetail