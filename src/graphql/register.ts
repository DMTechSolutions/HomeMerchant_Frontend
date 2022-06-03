import gql from 'graphql-tag';

const registerMutation = gql`
    mutation loginMutation($authInput: AuthInput!) {
        authData: jwtLogin(auth: $authInput) {
            accessToken
            refreshToken
            user {
                id
                name
                email
                username
                isActive
            }
        }
    }
`;

export { registerMutation };
