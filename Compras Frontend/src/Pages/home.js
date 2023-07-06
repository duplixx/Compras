import { useQuery, gql } from '@apollo/client';
import { GET_ALL_FAKE_PRODUCTS, GET_ALL_PRODUCTS, } from '../gqloperation/queries';
import Card from '../components/card';
import Navbar from '../components/navbar';
import Category from '../components/category';


export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <span className="loading loading-dots loading-md"></span>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) {
    console.log(data);
  }

  return (
    <div className="p-4">
    <div className='grid grid-cols-3 gap-2'>
      {data.products.data.map(({ id, attributes }) => (
        <Card
            className="m-6"
          key={id}
          id={id}
          Name={attributes.Name}
          description={attributes.Description}
          price={attributes.Price}
          img={attributes.Images.data[0].attributes.url}
        />
      ))}
    </div>
    <Category />
    </div>
  );
}
