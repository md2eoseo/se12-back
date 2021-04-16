import { gql } from 'apollo-server';

export default gql`
  type Banner {
    id: Int!
    category: BannerCategory!
    banner: String
    title: String!
    contents: String
    startDate: String!
    endDate: String!
    createdAt: String!
    updatedAt: String!
  }

  enum BannerCategory {
    ANNOUNCEMENT
    EVENT
  }
`;
