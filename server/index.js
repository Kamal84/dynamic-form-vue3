const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');

console.log('Reading schema.graphql ...');
const schema = fs.readFileSync('./server/schema.graphql', 'utf8');
console.log('Processing schema.graphql ...');
const typeDefs = gql(schema);

const getRoutes = [
  {
    path: 'acceptTerms',
  },
  {
    path: 'personDetails',
  },
  {
    path: 'yourAddress',
  },
  {
    path: 'yourIncome',
  },
  {
    path: 'yourBank',
  },
];

const resolvers = {
  Query: {
    appRoute: () => getRoutes,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
