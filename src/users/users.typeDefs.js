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
    bag: [BagItem]
    totalBagItems: Int!
    createdAt: String!
    updatedAt: String!
  }

  enum Role {
    ADMIN
    CUSTOMER
  }

  type BagItem {
    id: Int!
    itemId: Int!
    quantity: Int!
    user: User!
    userId: Int!
  }
`;
