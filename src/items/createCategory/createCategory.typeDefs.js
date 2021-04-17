import { gql } from 'apollo-server';

export default gql`
  type CreateCategoryResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createCategory(name: String!): CreateCategoryResponse!
  }
`;
