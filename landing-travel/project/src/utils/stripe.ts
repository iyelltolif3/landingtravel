import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual Stripe publishable key
const stripePublicKey = 'pk_test_your_key_here';

export const getStripe = () => {
  return loadStripe(stripePublicKey);
};

export const createPaymentSession = async (quoteData: any) => {
  try {
    const response = await fetch('/api/create-payment-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    });

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error creating payment session:', error);
    throw error;
  }
};