import React from 'react'

function Movie({title,poster,overview,vote_average}) {
    console.log(title)
    console.log(poster)
    console.log(overview)
    console.log(vote_average)
    return (
        <div>
            <p>{title}</p>
            <p>{poster}</p>
            <p>{overview}</p>
            <p>{vote_average}</p>
        </div>
    )
}

export default Movie
