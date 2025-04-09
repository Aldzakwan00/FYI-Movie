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
                    setMovieNow(result.slice(5, 12)); 
                } catch (err) {
                    console.error("Error fetching movie list:", err);
                }
            };

            fetchMovies();
        }, []);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrent((prev) => (prev + 1) % moviesNow.length);
            }, 3000); 
            return () => clearInterval(interval);
        }, [moviesNow]);
        
        const currentMovie = moviesNow[current];

  return (
    <article className='text-white w-full min-h-[40vw] bg-black/50 bg-blend-multiply bg-cover' style={{
        backgroundImage: currentMovie
          ? `url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`
          : 'none',
    }}>
        <div className="container p-20 flex items-end  relative" >
            <div className=''>
                <h1 className='text-5xl font-bold'>{currentMovie ? currentMovie.title : 'Loading...'}</h1>
                <p className='text-lg mt-4 w-[40%]'>{currentMovie ? currentMovie.overview : 'Loading...'}</p>
                <button className='mt-6 bg-gradient-to-b from-orange-500 via-red-500 to-yellow-500 text-white px-4 py-2 rounded'>Watch Now</button>
                <div className='mt-10'>
                    {moviesNow.map((movie, index) => (
                        <span key={index} onClick={() => setCurrent(index)} className={`inline-block w-2 h-2 rounded-full mx-1 ${current === index ? 'bg-red-600' : 'bg-gray-400'}`}>

                        </span>
                    ))}
                </div>
            </div>
        </div>
        
        
    </article>
  )
}

export default Jumbotron