import { gql } from 'apollo-server';

export default gql`
  type SeeBannersResponse {
    ok: Boolean!
    error: String
    banners: [Banner]
  }
  type Query {
    seeBanners: SeeBannersResponse!
  }
`;
