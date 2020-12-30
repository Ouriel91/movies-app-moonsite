import React from 'react'
import './MovieItem.css'

function MovieItem({ data, selectMovie }) {

    return (
        <div className="movie_item_container">
            <a href="#" className="movie" onClick={() => selectMovie(data.id)}>
                {data.original_title}
            </a>
        </div>
    )
}

export default MovieItem
