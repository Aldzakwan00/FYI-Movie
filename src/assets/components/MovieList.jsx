import '../../App.css';

export default function MovieList() {
    return(
        <article className="movie-list bg-gray-900 text-white p-10 h-[500px]">
            <div className="movie-list-title ml-10 mb-10 text-xl font-bold"><h2>Movie List :</h2></div>
            <div className="movie-list-container mx-10 w-full">
                <div className="movie-item w-52 h-72 bg-zinc-500">
                    <img src="" alt="Movie Poster" />
                    <h3 className="movie-title">X</h3>
                    <p className="movie-rate">8.5</p>
                    <p className="movie-date">10-10-2010</p>
                </div>
            </div>
        </article>
    )
}
