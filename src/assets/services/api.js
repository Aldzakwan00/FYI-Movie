import axios from "axios"

const baseurl = "https://api.themoviedb.org/3"
const apiKey = "c93ff0e8fb9f0e8ec9f0cf39d4a994ee"

export const getMovieList = async () => {
    const response = await axios.get(`${baseurl}/movie/popular`, {
        params: {
            api_key: apiKey
        }
    })
    return response.data.results
}

export const getMovieNowPlaying = async () => {
    const response = await axios.get(`${baseurl}/movie/now_playing`, {
        params: {
            api_key: apiKey
        }
    })
    return response.data.results
}

export const getToprated = async (timeWindow = "day") => {
    const response = await axios.get(`${baseurl}/tv/popular`, {
        params: {
            api_key: apiKey
        }
    })
    return response.data.results
}

export const searchMovie = async () => {
    const search = await axios.get(q)
    return search.data.results
}