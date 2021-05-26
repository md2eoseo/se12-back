import { gql } from 'apollo-server';

export default gql`
  type updateBagItemCntResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    updateBagItemCnt(bagItemId: Int!, quantity: Int!): updateBagItemCntResponse!
  }
`;
