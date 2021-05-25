import { gql } from 'apollo-server';

export default gql`
  type seeBagResponse {
    ok: Boolean!
    error: String
    items: [Item]
  }
  type Query {
    seeBag: seeBagResponse!
  }
`;
