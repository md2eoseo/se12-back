import { gql } from 'apollo-server';

export default gql`
  type CreateBannerResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createBanner(
      category: BannerCategory!
      imgUrl: Upload
      title: String!
      contents: String
      startDate: String!
      endDate: String!
    ): CreateBannerResponse!
  }
`;
