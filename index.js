//Requiring Our Dependencies.
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

//DEV DEPENDENCIES
require('dotenv').config();

//GraphQL typeDefs
const typeDefs = require('./graphql/typeDefs');

//GraphQL Resolvers.
const resolvers = require('./graphql/resolvers');

//Setting Up Our Apollo Server.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

//Connecting To MongoDB
mongoose.connect(process.env._URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDB Connected')
        server.listen({port: 5000});
    })
    .catch(err => {
        console.log(err);
    });
