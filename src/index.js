import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'asd8708',
          userName: 'rafaelalves',
        };
      },
      users: () => {
        return [
          {
            id: '1',
            userName: 'rafaelalves 1',
          },
          {
            id: '2',
            userName: 'rafaelalves 2',
          },
          {
            id: '3',
            userName: 'rafaelalves 3',
          }
        ];
      },
    },
  },
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
