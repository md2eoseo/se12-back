import { gql } from 'apollo-server';

export default gql`
  type seeBagResponse {
    ok: Boolean!
    error: String
    bagItems: [BagItem]
  }
  type Query {
    seeBag: seeBagResponse!
  }
`;
