import { gql } from "@apollo/client"

export const SIGNUP=gql`
mutation Register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    jwt
    user {
      email
      confirmed
      blocked
      username
    }
    }
}
`
export const LOGIN=gql`
mutation Login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt user {
      username
      email
    }
  }
}
`