import React from 'react'
import { BACKEND_URL } from '../helpers'
import { Link } from 'react-router-dom'

export default function Card({id,Name,price,description,img}) {
  return (
    <Link to={`/product/${id}`}>
        <div className="card card-compact w-96 h-54 bg-base-100 shadow-xl">
        <figure><img src={`${BACKEND_URL+img}`} alt="Shoes"/></figure>
        <div className="card-body">
        <h2 className="card-title  truncate">{Name}</h2>
        <p className='truncate'>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">₹ {price}</button>
        </div>
        </div>
        </div>
    </Link>
  )
}
