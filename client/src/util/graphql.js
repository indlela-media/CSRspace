import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`
{
  getPosts {
    id
    name
    summary
    createdAt
  }
}
`;

export const FETCH_POST_QUERY = gql`
  query($postId: ID!){
    getPost(postId: $postId){
      id
      name
      summary
      body
      link
      createdAt
    }
  }
`;