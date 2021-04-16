import { gql } from 'apollo-server';

export default gql`
  type SeeBannerResponse {
    ok: Boolean!
    error: String
    banner: Banner
  }
  type Query {
    seeBanner(id: Int!): SeeBannerResponse!
  }
`;
