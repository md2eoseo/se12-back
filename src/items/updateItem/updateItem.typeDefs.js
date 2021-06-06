import { gql } from 'apollo-server';

export default gql`
  type UpdateItemResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    updateItem(
      id: Int!
      categoryId: Int
      name: String
      price: Int
      stock: Int
      imgUrl: [Upload]
      shippingFee: Int
      author: String
      contents: String
      publisher: String
      pressDate: String
      activate: Boolean
    ): UpdateItemResponse!
  }
`;
