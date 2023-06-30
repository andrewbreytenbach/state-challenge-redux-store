import { gql } from '@apollo/client';

// Action types
export const LOGIN = 'LOGIN';
export const ADD_ORDER = 'ADD_ORDER';
export const ADD_USER = 'ADD_USER';

// GraphQL mutations
export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER_MUTATION = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
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
  }
`;

export const ADD_USER_MUTATION = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// Action creators
export const login = (email, password) => ({
  type: LOGIN,
  email,
  password
});

export const addOrder = (products) => ({
  type: ADD_ORDER,
  products
});

export const addUser = (firstName, lastName, email, password) => ({
  type: ADD_USER,
  firstName,
  lastName,
  email,
  password
});
