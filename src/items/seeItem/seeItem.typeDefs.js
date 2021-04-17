import { gql } from 'apollo-server';

export default gql`
  type seeItemResponse {
    ok: Boolean!
    error: String
    item: Item
  }
  type Query {
    seeItem(id: Int): seeItemResponse!
  }
`;
