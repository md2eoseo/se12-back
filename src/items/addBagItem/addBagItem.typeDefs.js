import { gql } from 'apollo-server';

export default gql`
  type addBagItemResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    addBagItem(itemId: Int!, quantity: Int!): addBagItemResponse!
  }
`;
