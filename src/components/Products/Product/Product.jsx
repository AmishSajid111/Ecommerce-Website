        import React from 'react';
        import { Link, useNavigate,  } from 'react-router-dom';
        import Button from '../../custom-button/custom-button.component';
        import { useDispatch } from 'react-redux';
            import { addProduct } from './../../../redux/Cart/cart.actions';

        const Product = (product) => {
        const dispatch = useDispatch();
       const nav= useNavigate();
        const {
            documentID,
            productThumbnail,
            productName,
            productPrice
        } = product;
        if (!documentID || !productThumbnail || !productName ||
            typeof productPrice === 'undefined') return null;

        const configAddToCartBtn = {
            type: 'button'
        };

        const handleAddToCart = (product) => {
                if (!product) return;
                dispatch(
                addProduct(product)
                );
                nav('/cart');
        };

        return (
            <div className="product">
            <div className="thumb ">
                <Link to={`/product/${documentID}`}>
                <img className='image' src={productThumbnail} alt={productName} />
             
                </Link>
            </div>

            <div className="details">
                <ul>
                <li>
                    <span className="name">
                    <Link to={`/product/${documentID}`}>
                        {productName}
                    </Link>
                    </span>
                </li>
                <li>
                    <span className="price">
                    £{productPrice}
                    </span>
                </li>
                <li>
                    <div className="addToCart">
                    <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)} inverted>
                        Add to cart
                    </Button>
                    </div>
                </li>
                </ul>
            </div>

            </div>
        );
        };

        export default Product;