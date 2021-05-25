import { gql } from 'apollo-server';

export default gql`
  type getItemsResponse {
    ok: Boolean!
    error: String
    items: [Item]
  }
  type Query {
    getItems(term: String, sortMethod: SortMethod, minPrice: Int, maxPrice: Int): getItemsResponse!
  }
`;
