import { gql } from 'apollo-server';

export default gql`
  type Item {
    id: Int!
    categoryId: Int!
    name: String!
    price: Int!
    imgUrl: String
    author: String
    contents: String
    publisher: String
    pressDate: String
    activate: Boolean
    createdAt: String!
    updatedAt: String!
  }

  type Category {
    id: Int!
    name: String!
    items: [Item]
    createdAt: String!
    updatedAt: String!
  }

  enum SortMethod {
    PRICE_LOW
    PRICE_HIGH
  }
`;
