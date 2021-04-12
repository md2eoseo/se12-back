import { gql } from 'apollo-server';

export default gql`
  type User {
    id: Int!
    name: String!
    email: String!
    password: String!
    address: String
    createdAt: String!
    updatedAt: String!
  }
`;
