import React from 'react'
import Movie from './Movie'
import './MovieItem.css'

function MovieList({ data, selectMovie }) {

    return (
        <div className="movie_item_container">
            <a href="#" className="movie" onClick={() => selectMovie(data.id)}>
                {data.original_title}
            </a>
        </div>
    )
}

export default MovieList
