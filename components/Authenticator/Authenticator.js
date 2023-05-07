import React from 'react';
import { Authenticator } from 'aws-amplify-react-native';
import SignIn from './SignIn'; // import your custom SignIn component

const MyAuthenticator = (props) => {
  return (
    <Authenticator {...props}>
      <SignIn />
    </Authenticator>
  );
}

export default MyAuthenticator;
