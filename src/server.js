import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers, playground: true, introspection: true });

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
