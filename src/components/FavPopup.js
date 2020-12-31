import React from 'react'
import './FavPopup.css'
import MovieEntry from './MovieEntry'

//Pop the popup of favorites movies
function FavPopup(props) {
    console.log(props.favMovies)
    return (
        <div title="close" className="open-button">
            <div style={{marginBottom:'8px'}}><span onClick={props.togglePopup}>X</span></div>
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
