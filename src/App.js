import React, { Component } from 'react'
import './App.css'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

//firebase init to google and facebook authentication
firebase.initializeApp({
  apiKey: "AIzaSyDYE-J6a3mp_Me_InlX0x31wQMiJ_Iuvx4",
  authDomain: "movies-app-850c0.firebaseapp.com"
})

export class App extends Component {

  state = { isSignedIn: false }

  //firebase ui for sign in buttons
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    
    //when component rendered check if user is logged in
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user //if user is object make isSignedIn to true and opposite
      })
      console.log("user", user)
    })
  }

  render() {
    const stam = (<p>סתם</p>) //default for name and image
    return (
      <div className="App">
        {
          this.state.isSignedIn ?
            (
              <div>
                <span>
                  <h1>welcome {firebase.auth().currentUser.displayName}</h1>
                  <img
                    referrerpolicy="no-referrer"
                    alt="profile pic"
                    src={firebase.auth().currentUser.photoURL}
                  />
                </span>
                <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
              </div>
            )
            :
            (
              <div>
                {stam}
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </div>
            )
        }
      </div>
    )
  }
}

export default App
