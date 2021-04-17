import { gql } from 'apollo-server';

export default gql`
  type SeeAllBannersResponse {
    ok: Boolean!
    error: String
    banners: [Banner]
  }
  type Query {
    seeAllBanners: SeeAllBannersResponse!
  }
`;
