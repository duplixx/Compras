import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_CATEGORIES } from '../gqloperation/queries';
import Card from '../components/card';

export default function Category() {
    const {cid}=useParams();
    const {loading,data,error}=useQuery(GET_CATEGORIES,{
        variables:{
            categoryId: cid
        }
    })
    console.log(data)
  return (
    <>
    <div className='flex overflow-x'>
      { data.category.data.attributes.products.data.map(({ id, attributes }) => (
        <Card className="m-6"
          key={id}
          id={id}
          Name={attributes.Name}
          description={attributes.Description}
          price={attributes.Price}
          img={attributes.Images.data[0].attributes.url}
        />
      ))}
    </div>
    </>
 )
}
