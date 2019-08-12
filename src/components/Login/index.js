import React, { Component } from 'react';
import './index.css';
import IconImage from '../../assets/icons/747376.svg';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div  className="login-name">
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }
      
          {
            user
              ? <img  alt="loginImg"  src={user.photoURL} onClick={signOut}></img>
              : <img  alt="loginImg"  src={IconImage} onClick={signInWithGoogle}></img>
          }
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
}) (Login);