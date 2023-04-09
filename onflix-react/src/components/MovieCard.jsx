
import { useEffect, useState } from 'react';
import Axios from 'axios';
import ReleaseIcon from '../assets/eye.svg'
import TimeIcon from '../assets/clock.svg'
import RateIcon from '../assets/star-fill.svg'
import PlayButton from '../assets/play-fill 1.svg'

function MovieCard() {
    const [popularMovies, SetPopularMovies] = useState ([])
    

    useEffect(() => {
    Axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=aa4cf977385f47ebf8160e43b648a495&page=1&region=US&language=en-US',
    })
        .then(function (response) {
            console.log(response.data.results)
            SetPopularMovies(response.data.results)
        });
}, [])

    const PopularMovieList = () => {
        return popularMovies.map((movie, i) => {
            return(
                <div className="card bg-dark text-white col-lg-2 col-md-3 col-sm-4 col-4" key={i}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex align-items-end">
                        <div className="rate-label position-absolute end-0"><img src={RateIcon} alt="" /> {movie.vote_average}</div>
                        <div className="text-container position-absolute" >
                            <div className="info-icons">
                                <span className="info-label">
                                    <img src={TimeIcon} alt="" />105 Minutes</span>
                                <span className="info-label">
                                    <img src={ReleaseIcon} alt="" />{movie.release_date}</span>
                            </div>
                            <h5 className="card-title col-12">{movie.title}</h5>
                            <span className='ButtonWrapper col-12'>
                                <button type="button" className="btn btn-warning btn-view col-5" data-bs-toggle="modal" data-bs-target="#exampleModal3">View</button>
                                <a className="btn btn-secondary btn-watch col-5" href="https://www.youtube.com/watch?v=bK6ldnjE3Y0&t=2s" role="button" target="blank"><img src={PlayButton} alt="" className="watch-icon" /> Watch</a>
                            </span>
                        </div>
                    </div>
                </div>
                
            )
        })
    }



    return (
        <>
            
        <div className="column d-flex justify-content-start col-12  position-relative me-3 ms-3 product-card-container">
            <PopularMovieList />
        </div>
        
        </>
    )
}

export default MovieCard;

