// import {useEffect, useState} from 'react'; 

// import MovieCard from './MovieCard'; 


// const API_URL = 'http://www.omdbapi.com?apikey=1842420f';
// const movie1 = {
//     "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
//     "Year": "2016",
//     "imdbID": "tt18689424",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
// }; 

// const App = () => { 

//     const [movies, setMovies] = useState([]); 
//     const searchMovies = async (title) => { 
//         const response = await fetch(`${API_URL}&s=${title}`); 
//         const data = await response.json(); 

//         setMovies(data.Search); 
//     }

//     useEffect(() => {
//         searchMovies('Titanic'); 
//     }, []); 


//     return ( 
//         <div className='app'>
//             <h1>Movie App</h1>

//             { 
//                 movies?.length > 0 
//                 ? (
//                     <div className='container'>
//                     <MovieCard movie1={movie1} />
//                   </div>
//                 ) : ( 
//                     <div className='empty'>
//                         <h2>No Movies Found</h2>
//                     </div>              
//                     )
//             }


           
//             <button>Generate</button>
//         </div>
        
//     ); 
// }

// export default App; 

import { useState } from 'react'; 
import MovieCard from './MovieCard'; 
import './App.css' 

const API_URL = 'http://www.omdbapi.com?apikey=1842420f';

const App = () => { 
    const [randomMovie, setRandomMovie] = useState(null);

    const generateRandomMovie = async () => {
        // Generate a random movie ID or title (this is just an example, you may need to adjust this)
        const randomTitles = ['Batman', 'Superman', 'Spiderman', 'Ironman', 'Avengers', 'Titanic', 'Deadpool'];
        const randomTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)];

        const response = await fetch(`${API_URL}&t=${randomTitle}`); 
        const data = await response.json(); 

        if (data && data.Title) {
            setRandomMovie(data);
        } else {
            console.error('No movie found');
        }
    }

    return ( 
        <div className='app'>
            <div className='card'>    
                <h1>Movie App</h1>

                <div className='container'>
                    {randomMovie ? (
                        <MovieCard movie1={randomMovie} />
                    ) : (
                        <p>Click the button to generate a random movie!</p>
                    )}
                </div>

                <button onClick={generateRandomMovie}>Generate</button>
            </div>
        </div>
    ); 
}

export default App;
