import '../../App.css';

export default function Header() {
    return(
        <header className="flex justify-between items-center p-4 bg-black text-white">
            <div className="title text-2xl ml-5">FYI MOVIE</div>
            <nav>
                <ul className="flex gap-10">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="#">Watchlist</a></li>
                </ul>
            </nav>
            <div className="search w-1/5 mr-5">
                <form class="max-w-md mx-auto">   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-gradient-to-b from-orange-500 via-red-500 to-yellow-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                    </div>
                </form>
            </div>
        </header>
    )
}
