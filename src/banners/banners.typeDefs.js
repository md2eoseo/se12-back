import { gql } from 'apollo-server';

export default gql`
  type Banner {
    id: Int!
    category: BannerCategory!
    imgUrl: String
    title: String!
    contents: String
    startDate: String!
    endDate: String!
    activate: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  enum BannerCategory {
    ANNOUNCEMENT
    EVENT
  }
`;
