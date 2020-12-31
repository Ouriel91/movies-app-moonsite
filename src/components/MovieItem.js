import React from 'react'
import './MovieItem.css'

//show list of movies with highest popularity (from api request)
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
