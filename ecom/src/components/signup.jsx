import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { SIGNUP } from '../gqloperation/mutation';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate();
  const [signupUser, { loading, error, data }] = useMutation(SIGNUP);
  const initialValues = {
    "email": "",
    "password": "",
    "username": ""
  };
  if (loading) return <p>Loading...</p>;

  if (data) {
    localStorage.setItem("jwt",data.register.jwt)
  }



  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
    username: Yup.string().required('Password is required'),
  });


  // Handle form submission

function handleSubmit(values){ 
    signupUser({
      variables: {
        input:values
      },
    })
      navigate("/login")
    }
  

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Signup now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {
              error && 
              <div className="alert alert-error shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Error! {error.message}</span>
              </div>
              </div>
            }
              <div className="card-body">
                <Form>
                  <div className="form-control">
                    <label htmlFor="identifier" className="label-text">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="input input-bordered"
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="identifier" className="label-text">
                      Username
                    </label>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      className="input input-bordered"
                    />
                    <ErrorMessage name="username" component="div" />
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
                    <button type="submit" className="btn btn-cyan-350">
                      Signup
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
}
