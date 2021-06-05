import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import { getLoggedInUser } from './users/users.utils';

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: async ({ req }) => {
    return { loggedInUser: await getLoggedInUser(req.headers.authorization) };
  },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
