import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection,$searchKeyword: String){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
        node {
          ownerAvatarUrl
          ownerName
          stargazersCount
          ratingAverage
          forksCount
          language
          fullName
          description
          reviewCount
          id
        }
      }
    }
  }
`;
export const GET_REPOSITORY = gql`
  query ($id: ID!) {
    repository(id: $id) {
      ownerAvatarUrl
      ownerName
      stargazersCount
      ratingAverage
      forksCount
      language
      fullName
      description
      reviewCount
      id
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }`;

export const SIGN_IN = gql`
  mutation ($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;
export const SIGN_UP = gql`
  mutation ($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      username
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation ($ownerName: String!, $repositoryName: String!, $rating: Int!, $text: String!) {
    createReview(review: { ownerName:$ownerName, repositoryName: $repositoryName, rating: $rating, text: $text }) {
      id
      repositoryId
      userId
      rating
      createdAt
      text
    }
  }
`;

export const CURRENT_USER = gql`
query getCurrentUser($includeReviews: Boolean = false) {
  me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`