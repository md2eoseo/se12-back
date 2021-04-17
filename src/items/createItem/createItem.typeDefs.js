import { gql } from 'apollo-server';

export default gql`
  type CreateItemResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createItem(
      categoryId: Int!
      name: String!
      price: Int!
      imgUrl: String
      author: String
      contents: String
      publisher: String
      pressDate: String
      activate: Boolean
    ): CreateItemResponse!
  }
`;
