import React from 'react'

function Movie(props) {
    const {title,poster_path,overview,vote_average,id} = props.movie
    const {image_api, favMovie} = props
    console.log(image_api+poster_path)
    return (
        <div>
            <p>{title}</p>
            <img style={{height:'40vh', width:'50vw'}} alt="movie poster" src={image_api+poster_path} />
            <p>{overview}</p>
            <p>{vote_average}</p>
            <button onClick={() => favMovie(id)}>+</button>
        </div>
    )
}

export default Movie
