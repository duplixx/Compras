import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LOGIN } from '../gqloperation/mutation';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate();
  const [loginUser, { loading, error, data }] = useMutation(LOGIN);
  const initialValues = {
    identifier: '',
    password: '',
  };
  if (loading) return <p>Loading...</p>;



  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    identifier: Yup.string().required('Identifier is required'),
    password: Yup.string().required('Password is required'),
  });


  // Handle form submission

function handleSubmit(values){
    loginUser({
      variables: {
        input:values
      },
    })
    navigate("/")
  };
  

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6 px-12">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <Form>
                  <div className="form-control">
                    <label htmlFor="identifier" className="label-text">
                      Email
                    </label>
                    <Field
                      type="text"
                      id="identifier"
                      name="identifier"
                      className="input input-bordered"
                    />
                    <ErrorMessage name="identifier text-red-400" component="div" />
                  </div>
                  <div className="form-control">
                    <label className="label" htmlFor="password">
                      <span className="label-text">Password</span>
                    </label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <ErrorMessage name="password" component="div" />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>

                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </Form>
              </div>
              {
                error && 
                <div className="alert alert-error shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Error! {error.message}</span>
                </div>
                </div>
              }
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
}
