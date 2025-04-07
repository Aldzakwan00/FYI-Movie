import React, { use } from 'react'
import { getMovieNowPlaying } from '../services/api';
import { useEffect, useState } from 'react';


const Jumbotron = () => {
        const [moviesNow, setMovieNow] = useState([]);
        const [current, setCurrent] = useState(0);

        useEffect(() => {
            const fetchMovies = async () => {
                try {
                    const result = await getMovieNowPlaying();
                    setMovieNow(result.slice(0, 5)); // Get the first 5 movies
                } catch (err) {
                    console.error("Error fetching movie list:", err);
                }
            };

            fetchMovies();
        }, []);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrent((prev) => (prev + 1) % moviesNow.length);
            }, 5000); 
            return () => clearInterval(interval);
        }, [moviesNow]);
        
        const currentMovie = moviesNow[current];

  return (
    <article className='text-white w-full min-h-screen bg-cover' style={{
        backgroundImage: currentMovie
          ? `url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`
          : 'none',
    }}>
        <div className="container" >
            
        </div>
        
    </article>
  )
}

export default Jumbotron