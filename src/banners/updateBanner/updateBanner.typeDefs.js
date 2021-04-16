import { gql } from 'apollo-server';

export default gql`
  type UpdateBannerResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    updateBanner(
      id: Int!
      category: BannerCategory
      banner: String
      title: String
      contents: String
      startDate: String
      endDate: String
    ): UpdateBannerResponse!
  }
`;
