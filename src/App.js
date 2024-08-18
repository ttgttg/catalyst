
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=1842420f';

const App = () => {
    const [randomMovie, setRandomMovie] = useState(null);
    const [lovedMovies, setLovedMovies] = useState([]);
    const [dislikedMovies, setDislikedMovies] = useState([]);

    const randomTitles = ['Batman', 'Superman', 'Ironman', 'Avengers', 'Titanic', 'Deadpool', 'Joker', 'Antman','Barbie', 'Inception','Interstellar','Parasite'];

    const generateRandomMovie = async () => {
        const randomTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)];

        const response = await fetch(`${API_URL}&t=${randomTitle}`);
        const data = await response.json();

        if (data && data.Title) {
            setRandomMovie(data);
        } else {
            console.error('No Movie found');
        }
    };

    useEffect(() => {
        generateRandomMovie();
    }, []);

    const handleNope = (movie) => {
        setDislikedMovies([...dislikedMovies, movie]);
        generateRandomMovie(); 
    };

    const handleLove = (movie) => {
        setLovedMovies([...lovedMovies, movie]);
        generateRandomMovie(); 
    };

    return (
        <div className='app'>
            <div className='card'>
                <h1>MatchFlix</h1>

                <div className='container'>
                    {randomMovie ? (
                        <MovieCard 
                            movie1={randomMovie} 
                            onNope={handleNope} 
                            onLove={handleLove} 
                        />
                    ) : (
                        <p>Loading movie...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
