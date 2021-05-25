import { gql } from 'apollo-server';

export default gql`
  type searchItemsResponse {
    ok: Boolean!
    error: String
    items: [Item]
  }
  type Query {
    searchItems(term: String, categoryId: Int, minPrice: Int, maxPrice: Int): searchItemsResponse!
  }
`;
