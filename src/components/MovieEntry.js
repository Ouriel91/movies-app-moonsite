import React from 'react'

function MovieEntry(props) {
    const {movie} = props
    return (
        <div>
            <h1>{movie.title}</h1>
            <img style={{width:'20%', height:'20%'}} alt="movie poster" src={props.image_api + movie.poster_path} />
        </div>
    )
}

export default MovieEntry
