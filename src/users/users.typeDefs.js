import { gql } from 'apollo-server';

export default gql`
  type User {
    id: String!
    name: String!
    email: String!
    password: String!
    address: String
    createdAt: String!
    updatedAt: String!
  }
`;
