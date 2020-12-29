import React, { useState, useEffect } from 'react'
import MovieList from './components/MovieList'
import './App.css'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

//firebase init to google and facebook authentication
firebase.initializeApp({
  apiKey: "AIzaSyDYE-J6a3mp_Me_InlX0x31wQMiJ_Iuvx4",
  authDomain: "movies-app-850c0.firebaseapp.com"
})

//API variables
const API_KEY = "682b51252cb78ef7b412fe0c472e082b"
const MOVIE_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="
  + API_KEY + "&language=en-US&page=1"
const IMAGES = "https://image.tmdb.org/t/p/w1280/"


function App() {

  //states
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user =>
      setIsSignedIn(!!user)  //if user is object make isSignedIn to true and opposite
    )
  })

  useEffect(() => {
    fetch(MOVIE_API)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
  }, [])

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
    <div>
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
        <div className="">
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

  const showMoviesList = isSignedIn ? movies.length > 0 && movies.map(movie => (
    <MovieList 
      key={movie.id}
      data={movie}
      image_api={IMAGES}
    />
  )) : null

  return (
    <div>
      <div className="centering_content">
        {profile}
        {buttonsLoginOrNot}
      </div>
      {showMoviesList}
    </div>
  )
}

export default App
