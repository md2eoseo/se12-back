import { gql } from 'apollo-server';

export default gql`
  type User {
    id: Int!
    role: Role!
    userId: String!
    password: String!
    email: String!
    name: String!
    address: String
    createdAt: String!
    updatedAt: String!
  }

  enum Role {
    ADMIN
    CUSTOMER
  }
`;
