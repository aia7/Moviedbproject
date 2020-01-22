import React from 'react'

function Popup({selected, closePopup}) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.Title}<span>({selected.Year})</span></h2>
                <p className="title-info">Rating: {selected.imdbRating} /10 | {selected.Runtime} | Rated: {selected.Rated} </p>
                <div className="plot">
                    <img src = {selected.Poster} alt="" />
                    <ul>
                    <p>Genre: {selected.Genre}</p>
                    <p>Description: {selected.Plot}</p>
                    <p>Actors: {selected.Actors}</p>
                    <p>Released: {selected.Released}</p> 
                    </ul>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup
