import { gql } from 'apollo-server';

export default gql`
  type CreateAccountResponse {
    ok: Boolean!
    error: String
    userIdExist: Boolean
    emailExist: Boolean
  }
  type Mutation {
    createAccount(userId: String!, password: String!, email: String!, name: String!, address: String, role: Role): CreateAccountResponse!
  }
`;
