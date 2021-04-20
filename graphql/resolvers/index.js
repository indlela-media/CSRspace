const { PossibleTypeExtensionsRule } = require('graphql');
const postsResolvers = require('./post');
const usersResolvers = require('./users');

module.exports = {
    Post: {
        likeCount: (parent) => parent.likes.length
    },
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation
    }
};