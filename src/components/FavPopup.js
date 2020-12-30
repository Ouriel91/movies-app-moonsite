import React from 'react'
import './FavPopup.css'
import MovieEntry from './MovieEntry'

function FavPopup(props) {
    console.log(props.favMovies)
    return (
        <div title="close" className="open-button">
            <div><span onClick={props.togglePopup}>x</span></div>
            <div>
                {props.favMovies.map(favMovie => <MovieEntry
                    key={favMovie.id}
                    movie={favMovie}
                    image_api={props.image_api} />)}
            </div>
        </div>
    )
}

export default FavPopup
