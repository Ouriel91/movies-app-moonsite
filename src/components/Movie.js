import React from 'react'
import './Movie.css'

//show single movie after clicking on movie name on movie list
function Movie(props) {
    const { image_api, favMovie, isInFavorite, movie } = props //other props that passed to this component

    return (
        <div className="movie_container">
            <img className="movie_poster" alt="movie poster" src={image_api + movie.poster_path} />
            <div className="movie_details">
                <div className="details_container">
                    <h1>{movie.title}</h1>
                    <p style={{ color: 'gold', fontSize: '24px' }}>
                        <b>{movie.vote_average}</b>
                    </p>
                </div>
                <div className="details_container">
                    <p className="overview">{movie.overview}</p>
                    <button
                        className={isInFavorite ? "remove_fav_movie" : 'add_fav_movie'}
                        onClick={() => {
                            alert(isInFavorite ? "Remove " + movie.title + " to favorits" : "Add " + movie.title + " to favorits");
                            favMovie(movie.id)
                        }} />
                </div>
            </div>
        </div>
    )
}

export default Movie
