import { gql } from 'apollo-server';

export default gql`
  type CreateBannerResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createBanner(
      category: BannerCategory!
      imgUrl: String
      title: String!
      contents: String
      startDate: String!
      endDate: String!
      activate: Boolean
    ): CreateBannerResponse!
  }
`;
