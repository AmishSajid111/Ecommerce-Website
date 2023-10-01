    import React from 'react';
    import {  useNavigate } from 'react-router-dom';
    import { useSelector } from 'react-redux';
    import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selectors';
    import { createStructuredSelector } from 'reselect';
    import './styles.scss';
    import Button from '../custom-button/custom-button.component';
    import Item from './Item';
    import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
    const mapState = createStructuredSelector({
      cartItems: selectCartItems,
      total: selectCartTotal
    });

    const Checkout = () => {
     
      const nav = useNavigate();
      const { cartItems, total } = useSelector(mapState);

      const errMsg = 'You have no items in your cart.';

      return (
        <div className="checkout">
          <h1>
            Checkout
          </h1>

          <div className="cart">
            {cartItems.length > 0 ? (
              <table border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td>
                      <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                        <tbody>
                          <tr>
                            <th>
                              Product
                            </th>
                            <th>
                              Description
                            </th>
                            <th>
                              Quantity
                            </th>
                            <th>
                              Price
                            </th>
                            <th>
                              Remove
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table border="0" cellSpacing="0" cellPadding="0">
                        <tbody>
                          {cartItems.map((item, pos) => {
                            return (
                              <tr key={pos}>
                                <td>
                                  <Item {...item} />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table border="0" cellSpacing="0" cellPadding="0">
                        <tbody>
                          <tr>
                            <td>
                              <table border="0" cellPadding="10" cellSpacing="0">
                                <tbody>
                                  <tr>
                                    <td>
                                    <h3>
                                      Total: £{total}
                                    </h3>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table border="0" cellPadding="10" cellSpacing="0">
                                <tbody>
                                  <tr>
                                    <td>
                                      <Button onClick={() => nav('/shop')}>
                                        Continue Shopping
                                      </Button>
                                    </td>
                                     <td>
                                    <StripeCheckoutButton  price={total} />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
                <p>
                  {errMsg}
                </p>
              )}
           
          </div>
          <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
       </div>
        </div>
      );
    };

    export default Checkout;