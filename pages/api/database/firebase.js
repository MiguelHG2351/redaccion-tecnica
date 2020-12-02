import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyD677K3F-nENqrpYyVi3DtqiVX_yYM6TNk",
  authDomain: "redaccion-tecnica-f79d8.firebaseapp.com",
  databaseURL: "https://redaccion-tecnica-f79d8.firebaseio.com",
  projectId: "redaccion-tecnica-f79d8",
  storageBucket: "redaccion-tecnica-f79d8.appspot.com",
  messagingSenderId: "1013146006342",
  appId: "1:1013146006342:web:565006e80b234796da6b47",
  measurementId: "G-5DCGY87FJZ"
};

// Initialize Firebase
!firebase.apps.length && firebase.initializeApp(firebaseConfig)

firebase.analytics()

const mapUserFromFirebaseAuth = (user) => {
  if (user !== null) {
    // const { additionalUserInfo } = user
    const { photoURL, displayName, email } = user
    // const { avatar_url, blog } = profile
    return {
      avatar: photoURL,
      username: displayName,
      email
    }
  } else {
    return null
  }
}

export const authStateChange = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = mapUserFromFirebaseAuth(user)
      onChange(normalizedUser)
    })
}

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  githubProvider.addScope('repo')
  return firebase.auth().signInWithPopup(githubProvider)
}



