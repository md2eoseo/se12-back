import { gql } from 'apollo-server';

export default gql`
    type GetItemResponse {
        ok: Boolean!
        error: String
        item: Item
    }
    type Query {
        getItem_title(title: String!): GetItemResponse!
    }
`;