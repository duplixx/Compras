import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import Checkout from './checkout';

export default function Cart() {
    const [checkout,setcheckout]=useState(false)
    const navigate=useNavigate()
    const jwt=localStorage.access_token
    const {isEmpty,items,removeItem,updateItemQuantity}=useCart();
    if(isEmpty){
        return("cart is empty")
    }
    if(items){
        console.log(items)
    }else{
        return(
            <span className="loading loading-dots loading-md"></span>
        )
        
    }
   

  return (
    <>
    {
        checkout ?
        <center className='mt-[150px] w-full absolute '>
        <div  className="modal-box w-11/12 max-w-5xl">
            <Checkout/>
        </div>
        </center>
        :
        <div></div>
    }
    <div className="container mx-auto mt-10 p-12">
    
    <div className="flex mt-10 mb-5">
    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
      Product Details
    </h3>
    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
      Quantity
    </h3>
    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
      Price
    </h3>
    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
      Total
    </h3>
  </div>
  
     
      {" "}
      {items.map(item=>{
        return(
            <div className="flex items-center rounded-lg hover:bg-gray-100 hover:bg-shadow-lg -mx-8 px-6 py-5">
      <div className="flex w-2/5">  
      <div className="w-20">
        <img
          className="h-24 rounded-lg shadow-md"
          src={item.img}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between ml-4 flex-grow">
        <span className="font-bold text-sm">{item.Name}</span>
        <span className="text-red-500 text-xs">Apple</span>
        <span
          className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </span>
      </div>
    </div>
    <div className="flex justify-center w-1/5 bg-shadow-lg ">
      <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
      </svg>
      <input
        className="mx-2 border text-center w-8"
        type="text"
        defaultValue={0}
        value={item.quantity}
      />
      <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
      </svg>
    </div>
    <span className="text-center w-1/5 font-semibold text-sm">₹ {item.price}</span>
    <span className="text-center w-1/5 font-semibold text-sm">₹ {item.itemTotal}</span>
  </div>
  
        )
        
      })}
      
      {
        jwt ?
        <button className="btn  btn-outline btn-success" onClick={()=>setcheckout(true)}>
        <span className="loading loading-spinner "></span>
        Checkout
        </button>
        :
        <button className="btn  btn-outline btn-error" onClick={()=>navigate("/login")}>
        <span className="loading loading-spinner "></span>
        Please Login
        </button>
      }
      
  </div>
  </>
  

  )
}
