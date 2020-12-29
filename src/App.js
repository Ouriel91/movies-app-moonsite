import React, { useState, useEffect } from 'react'
import './App.css'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

//firebase init to google and facebook authentication
firebase.initializeApp({
  apiKey: "AIzaSyDYE-J6a3mp_Me_InlX0x31wQMiJ_Iuvx4",
  authDomain: "movies-app-850c0.firebaseapp.com"
})

function App() {

  //states
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user =>
      setIsSignedIn(!!user)  //if user is object make isSignedIn to true and opposite
    )
  })

  //firebase ui for sign in buttons
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  const profile = (
    <div className="">
      <h1>Welcome {isSignedIn ? firebase.auth().currentUser.displayName : "To you"}</h1>
      <img
        src={isSignedIn ?
          firebase.auth().currentUser.photoURL
          :
          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        }
        alt="Avatar"
        className="avatar"
      />
    </div>
  )

  const buttonsLoginOrNot =
    isSignedIn ?
      (
        <div>
          <button 
            className="logout_btn"
            onClick={() => firebase.auth().signOut()}>Sign Out</button>
        </div>
      )
      :
      (
        <div>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      )

  return (
    <div className="App">
      {profile}
      {buttonsLoginOrNot}
    </div>
  )
}

export default App
