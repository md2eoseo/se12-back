import { gql } from 'apollo-server';

export default gql`
  type GetUserResponse {
    ok: Boolean!
    error: String
    user: User
  }
  type Query {
    getUser(email: String!): GetUserResponse!
  }
`;
