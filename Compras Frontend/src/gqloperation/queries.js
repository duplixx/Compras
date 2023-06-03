import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query getAllProducts {
    products {
      data {
        id
        attributes {
          Description
          Price
          Name
          Images {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($productId: ID) {
    product(id: $productId) {
      data {
        id
        attributes {
          Description
          Images {
            data {
              attributes {
                url
              }
            }
          }
          Name
          Price
        }
      }
    }
  }
`;


export const GET_ALL_FAKE_PRODUCTS = gql`
  query getAllFakeProducts {
    products {
      id
      title
      price
      description 
      category
      images
    }
  }
`;
export const GET_CATEGORIES=gql`
query Catrgories {
  catrgories {
    data {
      id
      attributes {
        Name
      }
    }
  }
}`

export const GET_CATEGORY=gql`
query Categories($categoryId: ID) {
  category(id: $categoryId) {
    data {
      id
      attributes {
        products {
          data {
            id
            attributes {
              Name
              Price
              Images {
                data {
                  attributes {
                    url
                  }
                }
              }
              Description
            }
          }
        }
      }
    }
  }
}
`
export const GET_PRODUCT_BY_NAME = gql`
query Products($filters: ProductFiltersInput) {
  products(filters: $filters) {
    data {
      id
      attributes {
        Name
      }
    }
  }
}
` 


