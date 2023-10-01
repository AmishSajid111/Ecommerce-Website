import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import '../stripe-button/stripe-button.styles.scss'
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51NtmBlLcpvJQdITVICBIODdUjBPj4YYpzJZEODip1FtTZKLzTvqWhGrFfLMKK0enzyAZNdRSHLtpeheuN8gpsqAH00N16IBAWL';


    const payment=async(token)=>{
      await axios.post("http://localhost:8080/payment",{
        amount:priceForStripe,
        token:token
      })
      .then(response => {
              alert('Succesful Payment!');
              console.log('Succesful Payment!')
              
            })
            .catch(error => {
              console.log('Payment Error: ', error);
           
                alert(
                  'There was an issue with your payment! Please make sure to use the provided credit card data'
                );
            });
    };

  return (
    <div className='btn'>
    <StripeCheckout
      label='Pay Now'
      name='AS Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={payment}
      stripeKey={publishableKey}
    />
    </div>
  );
};

export default StripeCheckoutButton;