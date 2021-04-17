import { gql } from 'apollo-server';

export default gql`
  type getItemsResponse {
    ok: Boolean!
    error: String
    items: [Item]
    lastId: Int
  }
  type Query {
    getItems(term: String, sortMethod: SortMethod, minPrice: Int, maxPrice: Int, lastId: Int): getItemsResponse!
  }
`;
