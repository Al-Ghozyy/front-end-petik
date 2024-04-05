import React, { useState, useEffect } from "react";

const API_KEY = "your_api_key_here"; // Ganti dengan API key dari situs seperti TMDB atau yang lainnya

const Popular = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    const fetchPopularMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
            const data = await response.json();
            setPopularMovies(data.results);
        } catch (error) {
            console.error("Error fetching popular movies: ", error);
        }
    };

    const fetchMovieDetail = async (movieId) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
            const data = await response.json();
            setSelectedMovie(data);
        } catch (error) {
            console.error("Error fetching movie details: ", error);
        }
    };

    const handleMovieClick = (movieId) => {
        fetchMovieDetail(movieId);
    };

    return (
        <div>
            <h1>Popular Movies</h1>
            <div className="popular-movies">
                {popularMovies.map((movie) => (
                    <div key={movie.id} className="movie" onClick={() => handleMovieClick(movie.id)}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>Release Date: {movie.release_date}</p>
                        <p>Vote Average: {movie.vote_average}</p>
                        <p>Vote Count: {movie.vote_count}</p>
                    </div>
                ))}
            </div>
            {selectedMovie && (
                <div className="movie-details">
                    <h2>{selectedMovie.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
                    <p>{selectedMovie.overview}</p>
                </div>
            )}
        </div>
    );
};

export default Popular;
