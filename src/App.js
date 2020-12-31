import React, { useState, useEffect } from 'react'
import MovieItem from './components/MovieItem'
import Movie from './components/Movie'
import './App.css'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import FavPopup from './components/FavPopup'

//firebase init to google and facebook authentication
firebase.initializeApp({
  apiKey: "AIzaSyDYE-J6a3mp_Me_InlX0x31wQMiJ_Iuvx4",
  authDomain: "movies-app-850c0.firebaseapp.com"
})

//API variables
const API_KEY = "682b51252cb78ef7b412fe0c472e082b"
const MOVIE_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="
  + API_KEY + "&language=en-US&page=1"
const IMAGES = "https://image.tmdb.org/t/p/w1280"


function App() {

  //states
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [favMovies, setFavMovies] = useState([])
  const [showPopup, setShowPopup] = useState(false)

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

  const selectMovie = (movieId) => {
    //find movie by id to render the Movie component when click on movie in MovieItem component
    const movie = movies.find(movie => movie.id === movieId)
    setSelectedMovie(movie)
  }

  const addFavoriteMovie = (movieId) => {
    //if movie exist in favorits, don't add it again
    const existingMovie = favMovies.find(id => id === movieId)
    if (existingMovie) {
      return
    }
    //add movie to favorits (in new array)
    const movie = movies.find(movie => movie.id === movieId)
    const movieArr = [...favMovies]
    movieArr.push(movie.id)
    setFavMovies(movieArr)
  }

  const removeFavoriteMovie = (movieId) => {
    const movieArr = favMovies.filter(id => id !== movieId)
    console.log('rem2', movieArr)
    setFavMovies(movieArr)
  }

  const favoriteHandler = (movieId) => {
    const existingMovie = favMovies.find(id => id === movieId)
    if (existingMovie) {
      console.log('rem1', movieId)
      removeFavoriteMovie(movieId)
      return
    }
    addFavoriteMovie(movieId)
  }

  const isInFavorite = (movieId) => {
    const existingMovie = favMovies.find(id => id === movieId)
    if (existingMovie) {
      return true
    }

    return false
  }

  const togglePopup = () => {
    setShowPopup(prevValue => !prevValue)
  }

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
            onClick={() => {
              setSelectedMovie(null);
              firebase.auth().signOut()
            }}>Sign Out</button>
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
  //show movies if user logged in, pass all the movies, and the selected one to MovieItem component
  const showMoviesList = isSignedIn ? movies.length > 0 && movies.map(movie => (
    <MovieItem
      key={movie.id}
      data={movie}
      selectMovie={selectMovie}
    />
  )) : null

  return (
    <div>
      <div className="centering_content">
        {profile}
        {buttonsLoginOrNot}
      </div>
      {isSignedIn ? (
        <div>
          wishlist:{favMovies.length}
          <button
            disabled={favMovies.length === 0}
            onClick={togglePopup}>show favorits</button>
          {showPopup && <FavPopup
            image_api={IMAGES}
            favMovies={movies.filter(movie => {
              if (favMovies.includes(movie.id))
                return movie
            })}
            togglePopup={togglePopup} />}
        </div>
      ) : null}

      <div className="movies_container">
        <div>
          {showMoviesList}
        </div>
        {/*if movie selected add show it, also if the movie added to favorits add it to favorits*/}
        <div>
          {selectedMovie !== null ? <Movie
            movie={selectedMovie}
            image_api={IMAGES}
            favMovie={favoriteHandler}
            isInFavorite={isInFavorite(selectedMovie.id)} /> : null}
        </div>
      </div>
    </div>
  )
}

export default App
