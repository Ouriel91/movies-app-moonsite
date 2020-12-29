import React from 'react'
import Movie from './Movie'
import './MovieList.css'

/* title={data.original_title}
                poster={image_api + data.poster_path}
                overview={data.overview}
                vote_average={data.vote_average} */
function MovieList({ data, image_api,selectMovie }) {

    return (
        <a href="#" className="movie" onClick={() => selectMovie(data.id)}>
            {data.original_title}
        </a>
    )
}

export default MovieList
