import React from 'react'
import './Movie.css'

function Movie(props) {
    const { title, poster_path, overview, vote_average, id } = props.movie //object of selected movie
    const { image_api, favMovie, isInFavorite } = props //other props that passed to this component

    return (
        <div className="movie_container">
            <img className="movie_poster" alt="movie poster" src={image_api + poster_path} />
            <div className="movie_details">
                <div className="details_container">
                    <h1>{title}</h1>
                    <p><b>{vote_average}</b></p>
                </div>
                <div className="details_container">
                    <p className="overview">{overview}</p>
                    <button onClick={() => favMovie(id)}>{ isInFavorite ? '-' : '+'}</button>
                </div>
            </div>
        </div>
    )
}

export default Movie
