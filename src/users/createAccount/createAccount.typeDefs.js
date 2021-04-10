import { gql } from 'apollo-server';

export default gql`
  type CreateAccountResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createAccount(name: String!, email: String!, password: String!, address: String): CreateAccountResponse!
  }
`;
