const  getPopularMovies = async () => {
    const popular = await moviesApi.get('/movie/popular')
    const combine = popular.data.results.map( async (movie,index) =>{
        const config = {params: {append_to_response: 'credit'}}
        const movieDetail = await moviesApi.get(`movie/${movie.id}`, config )
        const movieTrailer = await moviesApi.get(`movie/${movie.id}/videos`)
        movie = movieDetail.data
        movie.director = movieDetail.data.credits.crew.filter((crew) => crew.job === 'Director')[0]
        movie.trailer = movieTrailer.data.results.filter((video) => video.type === 'Trailer')[0]
        return movie
    })
    let results = await Promise.all(combine)
    setPopularMovies(results)
}
