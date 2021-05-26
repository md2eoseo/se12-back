import { gql } from 'apollo-server';

export default gql`
  type Item {
    id: Int!
    category: Category!
    categoryId: Int!
    name: String!
    price: Int!
    stock: Int!
    imgUrl: [String]
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

  type BagItem {
    id: Int!
    item: Item!
    itemId: Int!
    quantity: Int!
    user: User!
    userId: Int!
  }
`;
