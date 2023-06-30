import { gql } from '@apollo/client';

// Action types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_CHECKOUT = 'FETCH_CHECKOUT';
export const FETCH_ALL_PRODUCTS = 'FETCH_ALL_PRODUCTS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_USER = 'FETCH_USER';

// GraphQL queries
export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

// Action creators
export const fetchProducts = (category) => ({
  type: FETCH_PRODUCTS,
  category
});

export const fetchCheckout = (products) => ({
  type: FETCH_CHECKOUT,
  products
});

export const fetchAllProducts = () => ({
  type: FETCH_ALL_PRODUCTS
});

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES
});

export const fetchUser = () => ({
  type: FETCH_USER
});
