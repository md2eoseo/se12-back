import { gql } from 'apollo-server';

export default gql`
  type SeeRecentItemsResponse {
    ok: Boolean!
    error: String
    items: [Item]
  }
  type Query {
    seeRecentItems(count: Int): SeeRecentItemsResponse!
  }
`;
