import { gql } from 'apollo-server';

export default gql`
  type deleteBagItemResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    deleteBagItem(id: Int!): deleteBagItemResponse!
  }
`;
