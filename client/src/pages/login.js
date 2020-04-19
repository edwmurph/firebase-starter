import React, { useEffect } from 'react';
import { ui, firebase } from '../firebase';

const Login = () => {
  useEffect(() => {
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        },
      ],
      callbacks: {
        signInSuccessWithAuthResult: (res, red) => {
          console.log('success:', res, red);
        },
      },
    });
  }, []);

  return (
    <>
      <div id="firebaseui-auth-container"></div>
    </>
  );
};

export default Login;
