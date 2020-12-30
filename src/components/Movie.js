import React from 'react'
import './Movie.css'

function Movie(props) {
    const {title,poster_path,overview,vote_average,id} = props.movie //object of selected movie
    const {image_api, favMovie} = props //other props that passed to this component

    return (
        <div className="movie_container">
            <h1>{title}</h1>
            <img style={{height:'40vh', width:'50vw'}} alt="movie poster" src={image_api+poster_path} />
            <p>{overview}</p>
            <p><b>{vote_average}</b></p>
            <button onClick={() => favMovie(id)}>+</button>
        </div>
    )
}

export default Movie
