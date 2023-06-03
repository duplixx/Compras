import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_CATEGORIES } from '../gqloperation/queries'
import { Link } from 'react-router-dom';

export default function Category() {
    const {data,loading,error}=useQuery(GET_CATEGORIES)
    if(loading) {
        <span className="loading loading-infinity loading-lg"></span>;
    }
  return (
    <div className="fixed bottom-2 right-0" >
    {
        data?.catrgories?.data.map(({id,attributes})=>{
            return <button className="btn btn-sm m-2"><Link to={`/category/${id}`}>{attributes.Name}</Link></button>
        })
    }
    </div>
  )
}
