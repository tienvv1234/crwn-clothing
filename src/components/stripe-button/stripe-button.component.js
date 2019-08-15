import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_AQVPg18E5YrS1TQ6tffizx4S';
    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    };
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN clothing ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
