import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {addToCartOption} from '../features/cartSlice';

const Products = ({ homePageProduct, number, searchProductList, searchDataByButtonClicked }) => {
    const product = useSelector((state) => state.cart.product);
    const arrLength = (searchProductList ?? []).length;
    const test = (searchDataByButtonClicked ?? []).length;
    const dispatch = useDispatch();
    // const products = test > 0 ? searchDataByButtonClicked : arrLength > 0 ? searchProductItem : homePageProduct ? product.slice(0, number) : product;
    let products;
    switch (true) {
        case test > 0:
            products = searchDataByButtonClicked;
            break;
        case arrLength > 0:
            products = searchProductList;
            break;
        case homePageProduct:
            products = product.slice(0, number);
            break;
        default:
            products = product;
            break;
    }
    const addToCart = (e,id)=>{
        e.preventDefault();
        dispatch(addToCartOption(id))
    }
    return (
        <>
            {
                products.map(({ id, category, description, image, price, title }, index) =>
                    <Link to={`/productdetail/${id}`} style={{ textDecoration: 'none' }} key={index}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={image} className="card-img-top" alt={title} height={200} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#707070' }}>{title.slice(0, 20)}</h5>
                                <h6 style={{ color: '#707070' }}>{category}</h6>
                                <p>Price: ${price}</p>
                                <p className="card-text">{description.slice(0, 80)}...</p>
                                <button className="btn btn-outline-warning" onClick={(e)=>addToCart(e,id)}>Add to cart</button>
                            </div>
                        </div>
                    </Link>
                )
            }
        </>
    )
}

export default Products