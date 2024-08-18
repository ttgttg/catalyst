 import React from "react";

const MovieCard = ({ movie1, onNope, onLove }) => {
    return (
        <>
            <div className='movie'>
                <p>{movie1.Year}</p>
            </div>

            <div>
                <img 
                    src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/200'} 
                    alt={movie1.Title}
                />
            </div>

            <div>
                <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3>
            </div>

            <button onClick={() => onNope(movie1)}>Nope</button>
            <button onClick={() => onLove(movie1)}>Love this</button>
        </>
    );
}

export default MovieCard;
