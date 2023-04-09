import axios from "axios";

export const getMovieList = async() => {
    const movie = await axios.get("")
    return
}

export const searchMovie = async(q) => {
    const movie = await axios.get(q)
    return
}