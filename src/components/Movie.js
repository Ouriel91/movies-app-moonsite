import React from 'react'
import './Movie.css'

function Movie(props) {
    const { title, poster_path, overview, vote_average, id } = props.movie //object of selected movie
    const { image_api, favMovie } = props //other props that passed to this component

    return (
        <div className="movie_container">
            <img className="movie_poster" alt="movie poster" src={image_api + poster_path} />
            <div className="movie_details">
                <div className="details_container">
                    <h1>{title}</h1>
                    <p style={{alignItems:'flex-end'}}><b>{vote_average}</b></p>
                </div>
                <div className="details_container">
                    <p>{overview}</p>
                    <button onClick={() => favMovie(id)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Movie
