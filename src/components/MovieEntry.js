import React from 'react'
import './MovieEntry.css'

//show each single movie in favorits popup
function MovieEntry(props) {
    const { movie } = props
    return (
        <div>
            <div className="movie_entry_row">
                <img style={{ width: '20%', height: '20%' }} alt="movie poster" src={props.image_api + movie.poster_path} />
                <h1>{movie.title}</h1>
            </div>
            <hr />
        </div>
    )
}

export default MovieEntry
