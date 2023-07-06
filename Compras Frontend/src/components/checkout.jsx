import React, { useState } from 'react';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Country, State, City }  from 'country-state-city';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCart } from 'react-use-cart';
import { BACKEND_URL } from '../helpers';
const stripePromise = loadStripe('pk_test_51NEUkCSGCv3lqfV6tqqSs08yp4WGkZFSx8TBuvAJtw3l3TnPZ8mjMWa45APxw7yT2dC3bEGseh1boCaMoOceItvS00MhsTaI3I');

const CheckoutForm = () => {
  const [processing, setProcessing] = useState();
  const [payButton,setPayButton]=useState();
  const { cartTotal, items, emptyCart } = useCart();
  const elements = useElements();
  const stripe = useStripe();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    shippingAddress: Yup.string().required('Shipping Address is required'),
    amount: Yup.number().required('Amount is required'),
    items: Yup.string().required('Items are required'),
    pin: Yup.number().required('PIN is required'),
  });

  const initialValues = {
    name: '',
    city: '',
    state: 'Uttar Pradesh',
    shippingAddress: '',
    amount: cartTotal,
    items: '',
    pin: '',
  };

  const makePaymentsReq = async (values) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/orders`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
        body: JSON.stringify(values),
      });

      // Handle the response from the server
      if (res.ok) {
        // Payment successful
        alert('Payment successful!');
      } else {
        const errorData = await res.json();
        if (errorData && errorData.error && errorData.error.message) {
          alert(`Payment failed: ${errorData.error.message}`);
        } else {
          alert('Payment failed');
        }
      }
    } catch (error) {
      // Error occurred during the payment process
      alert(error.message)
    }
  };

  const handleFormSubmit = async (values) => {
    if (elements == null) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const payload = await stripe.createToken(cardElement);
    const allFormData = {
      ...values,
      token: payload.token.id,
      amount: cartTotal,
      items: items,
    };

    setProcessing(true);
    await makePaymentsReq(allFormData);
    setProcessing(false);
    emptyCart();
  };

  return (
      <div className="container mx-auto text-lg font-semibold mb-2">
        <h1 className='text-2xl font-black p-3 '>Checkout Form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          <Form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" className="input input-bordered" />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <Field type="text" id="city" name="city" className="input input-bordered" />
              <ErrorMessage name="city" component="div" className="text-red-500" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="state">State</label>
              <Field as="select" id="state" name="state"  className="input input-bordered">
                <option value={State.getAllStates("IN")}/>
              </Field>
              <ErrorMessage name="state" component="div" className="text-red-500" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="shippingAddress">Shipping Address</label>
              <Field
                type="text"
                id="shippingAddress"
                name="shippingAddress"
                className="input input-bordered"
              />
              <ErrorMessage name="shippingAddress" component="div" className="text-red-500" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="amount">Amount</label>
              <Field type="number" id="amount" name="amount" className="input input-bordered text-green-600 text-xl " />
              <ErrorMessage name="amount" component="div" className="text-red-500" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="items">Items</label>
              <Field type="text" id="items" name="items" value={items.length} className="input input-bordered text-justify" />
              <ErrorMessage name="items" component="div" className="text-red-500" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="pin">PIN</label>
              <Field type="number" id="pin" name="pin" className="input input-bordered" />
              <ErrorMessage name="pin" component="div" className="text-red-500" />
            </div>

            <div className="flex flex-col">
            <CardElement className="input input-bordered" onChange={(e)=>{
              if(e.complete){
                setPayButton(false)
              }else{
                  setPayButton(true)
              }
          }} />
          

          </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={(!stripe || !elements) || payButton}
                className="btn btn-primary px-6 text-xl shadow-lg shadow-green-400"
              >
                Pay
              </button>
              {processing ? (
                <span className="loading loading-infinity loading-md">loading</span>
              ) : (
                <div></div>
              )}
            </div>
          </Form>
        </Formik>
      </div>
  );
};
const Checkout = ()=>{
  return(
      <Elements stripe={stripePromise}>
       <CheckoutForm />
     </Elements>
  )
}

export default Checkout;
