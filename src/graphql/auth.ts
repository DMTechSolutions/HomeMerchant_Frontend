import gql from 'graphql-tag'

const loginMutation = gql`
  mutation loginMutation($authInput: AuthInput!) {
    authData: jwtLogin(auth: $authInput) {
      accessToken
      refreshToken
      loginUser {
          username,
          email,
          password,
          token,
          usertype
      }
    }
  }
`

export { loginMutation }
