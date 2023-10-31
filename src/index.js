import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// const server = new ApolloServer({
//   typeDefs: gql`
//     type Query {
//       id: ID!
//       name: String!
//       age: Int!
//       average: Float!
//       married: Boolean!
//       arrayString: [String!]!
//     }
//   `,
//   resolvers: {
//     Query: {
//       id: () => 1,
//       name: () => 'Rafael Alves',
//       age: () => 33,
//       average: () => 50.55,
//       married: () => true,
//       arrayString: () => [],
//     },
//   },
// });

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
