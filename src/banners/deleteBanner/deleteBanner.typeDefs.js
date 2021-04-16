import { gql } from 'apollo-server';

export default gql`
  type DeleteBannerResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    deleteBanner(id: Int!): DeleteBannerResponse!
  }
`;
