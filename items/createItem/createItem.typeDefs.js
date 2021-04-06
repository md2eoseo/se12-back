import { gql } from 'apollo-server';

export default gql`
  type CreateItemResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createItem(
      title: String!
      author: String!
      price: Int!
      contents: String
      category: String!
      publisher: String!
      isbn: String!
      pressDate: String!
      activate: Boolean!
      createdAt: String!
      updatedAt: String!
    ): CreateItemResponse!
  }
`;
