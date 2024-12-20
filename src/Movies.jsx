//Exercise 2 Solution 

import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'The Marvels 2023', description: 'Psychological Thriller', genre: 'Marvel', detailsVisible: false },
        { id: 2, title: 'Ant-Man and the Wasp: Quantumania 2023', description: 'Action tradgedy', genre: 'Marvel', detailsVisible: false },
        { id: 3, title: 'The Dark Knight', description: 'Batmanvs Joker', genre: 'Marvel', detailsVisible: false },
        { id: 4, title: 'Thor: Love and Thunder 2022', description: 'Action tradgedy', genre: 'Marvel', detailsVisible: false },
    ]);

   
    const [activeGenre, setActiveGenre] = useState('All');

    const handleToggleDetails = (movieId) => {
        setMovies(movies.map((movie) => 
            movie.id === movieId 
            ? { ...movie, detailsVisible: !movie.detailsVisible } 
            : movie
        ));
    };

    
    const handleRemoveMovie = (movieId) => {
        setMovies(movies.filter((movie) => movie.id !== movieId));
    };

    const filteredMovies = activeGenre === 'All' ? movies : movies.filter((movie) => movie.genre === activeGenre);

    return (
        <div>
            <button 
                onClick={() => setActiveGenre((prevGenre) => prevGenre === 'All' ? 'Action' : 'All')}
                style={{ marginBottom: '20px' }}
            >
                {activeGenre === 'All' ? 'Show Action Movies Only' : 'Show All Movies'}
            </button>

            <ul style={{ listStyleType: 'none' }}>
                {filteredMovies.map((movie) => (
                    <li key={movie.id} style={{ marginBottom: '15px' }}>
                        <h3 
                            style={{ cursor: 'pointer', color: '#007BFF' }} 
                            onClick={() => handleToggleDetails(movie.id)}
                        >
                            {movie.title}
                        </h3>

                        {movie.detailsVisible && <p>{movie.description}</p>}

                        <button 
                            onClick={() => handleRemoveMovie(movie.id)} 
                            style={{ backgroundColor: '#FF5733', color: '#fff', border: 'none', padding: '5px 10px' }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
