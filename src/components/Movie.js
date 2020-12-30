import React from 'react'
import './Movie.css'

function Movie(props) {
    const { image_api, favMovie, isInFavorite,movie } = props //other props that passed to this component

    return (
        <div className="movie_container">
            <img className="movie_poster" alt="movie poster" src={image_api + movie.poster_path} />
            <div className="movie_details">
                <div className="details_container">
                    <h1>{movie.title}</h1>
                    <p><b>{movie.vote_average}</b></p>
                </div>
                <div className="details_container">
                    <p className="overview">{movie.overview}</p>
                    <button onClick={() => favMovie(movie.id)}>{ isInFavorite ? '-' : '+'}</button>
                </div>
            </div>
        </div>
    )
}

export default Movie
