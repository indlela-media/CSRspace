const { gql } = require('apollo-server');

module.exports = gql`
    type Post{
        id: ID!
        name: String!
        summary: String!
        body: String!
        link: String!
        createdAt: String!
        username: String!
        comments: [Comment]!
        likes: [Like]!
        likeCount: Int!
    }

    type Comment{
        id: ID!
        createdAt: String!
        username: String!
        body: String!
    }

    type Like{
        id: ID!
        createdAt: String!
        username: String!
    }

    type User{
        id: ID!

        organization_name: String!
        category: String!
        organization_type: String!
        email: String!
        phone_number: String!
        registration_number: String!
        password: String!

        representative: [Rep_Info]!
        org_documents: [NPO_Docs]!

        token: String!
        createdAt: String!
    }

    type Rep_Info{
        rep_name: String!
        rep_email: String!
        rep_number: String!
        org_website: String!
    }

    type NPO_Docs{
        press_kit: String!
        bbe_cert: String!
        reg_cert: String!
        sec_18a_cert: String!
        annual_report: String!
        founding_docs: String!
    }

    input RegisterInput{
        email: String!
        password: String!
        confirmPassword: String!
    }

    type Query{
        getPosts: [Post]
        getPost(postId: ID!): Post
    }

    type Mutation{
        register(registerInput: RegisterInput): User!
        login(email: String!, password: String!): User!
        createPost(name: String! summary: String! body: String! link: String!): Post!
        deletePost(postId: ID!): String!
        likePost(postId: ID!): Post!
        createComment(postId: String!, body: String!): Post!
        deleteComment(postId: ID!, connectId: ID!): Post!
    }
`;