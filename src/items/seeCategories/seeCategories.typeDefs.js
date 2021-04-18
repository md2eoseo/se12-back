import { gql } from 'apollo-server';

export default gql`
  type SeeCategoriesResponse {
    ok: Boolean!
    error: String
    categories: [Category]
  }
  type Query {
    seeCategories: SeeCategoriesResponse!
  }
`;
