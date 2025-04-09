import { useEffect, useState } from 'react';
import '../../App.css';
import { getMovieList, getToprated } from '../services/api';

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [topMovie, setTopMovie] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const result = await getMovieList();
                setMovies(result.slice(0, 10)); 
            } catch (err) {
                console.error("Error fetching movie list:", err);
                setError("Failed to fetch movies.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const result = await getToprated();
                setTopMovie(result.slice(0, 8));
            } catch (err) {
                console.error("Error fetching movie list:", err);
                setError("Failed to fetch movies.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return (
        <article className="bg-gray-900 text-white py-10 min-h-screen grid grid-cols-[3fr_1fr] gap-6 p-4">
            <div className="container mx-auto px-10 md:px-20 lg:px-28 mt-52">
                <h2 className="text-2xl font-bold mb-8">🎬 Movie List</h2>

                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : movies.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        {movies.map((movie) => (
                            <div
                                key={movie.id}
                                className="bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-3">
                                    <h3
                                        className="text-sm font-semibold truncate mb-1"
                                        title={movie.title}
                                    >
                                        {movie.title}
                                    </h3>
                                    <div className="text-yellow-400 text-xs mb-1">
                                        ⭐ {movie.vote_average}
                                    </div>
                                    <p className="text-gray-400 text-xs">
                                        {new Date(movie.release_date).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No movies found</p>
                )}
            </div>
            <div className='mt-52'>
            <h2 className="text-2xl font-bold mb-8">Top TV List</h2>
            {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : movies.length > 0 ? (
                    <div className=''>
                        {topMovie.map((movie) => (
                            <div key={movie.id} className='flex w-[80%] p-5 h-[7vw] gap-5 border-2 border-gray-800 rounded-lg mb-4'>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}/>
                                <div className=''>
                                    <h3 className="text-sm font-semibold truncate mb-1 w-44 flex flex-col justify-between"
                                        title={movie.name}>
                                        {movie.name}
                                    </h3>
                                    <div className="text-yellow-400 text-xs mb-1">
                                        ⭐ {movie.vote_average}
                                    </div>
                                    <p className="text-gray-400 text-xs">
                                        {new Date(movie.first_air_date).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ): (
                    <p>No movies found</p>
                )}
            </div>
        </article>
    );
}
