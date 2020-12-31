import React from 'react'

//show each single movie in favorits popup
function MovieEntry(props) {
    const {movie} = props
    return (
        <div>
            <h1>{movie.title}</h1>
            <img style={{width:'20%', height:'20%'}} alt="movie poster" src={props.image_api + movie.poster_path} />
            <hr/>
        </div>
    )
}

export default MovieEntry
