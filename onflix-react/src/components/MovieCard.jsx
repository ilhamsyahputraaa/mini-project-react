
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
                <>
                {/* Card */}
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
                                <button type="button" className="btn btn-warning btn-view col-5" data-bs-toggle="modal" data-bs-target={`#movieModal${movie.id}`}>View</button>
                                <a className="btn btn-secondary btn-watch col-5" href="https://www.youtube.com/watch?v=bK6ldnjE3Y0&t=2s" role="button" target="blank"><img src={PlayButton} alt="" className="watch-icon" /> Watch</a>
                            </span>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                <div className="modal modal-lg fade" id={`movieModal${movie.id}` }tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" key={i}>
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                        
                        {/* Header Img */}
                        <div className="position-relative">
                            <div className="landscapePosterOverlay"><button type="button" className="btn-close end-0" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="container-fluid d-flex container-landscape-poster">
                                <img src= {`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} className="landscape-poster"/>
                            </div>
                        </div>
                        <div className="container-fluid d-flex modal-content-container">
                            <div id="modal-content-container" className="container-fluid d-flex">
                                {/* Container 1 : Poster */}
                            <div className="col-5 modal-regular-poster-container">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="regular-poster-modal " style={{ borderRadius: '1.5rem' }}/>
                            </div>
                            {/* Container 2 : Description */}
                            <div className="col-7 modal-description">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="regular-poster-modal " style={{ borderRadius: '1.5rem' }}/>
                                <h1 id="modal-title">{movie.title}</h1>
                                <span >
                                    <span className="info-label-modal"> <img src={TimeIcon} alt={movie.title}/>{movie.runtime} Minutes</span>
                                    <span className="info-label-modal"> <img src={ReleaseIcon} alt={movie.title}/>{movie.release_date}</span>
                                    <span className="rate-label-header"> <img src={RateIcon} alt=""/>{movie.vote_average}</span>
                                </span>
                                <span>
                                    <span>
                                        <a className="btn btn-secondary col-6 " href={movie.trailer} 
                                        role="button" target="blank"><img src={PlayButton} alt={movie.title} className="watch-icon" /> Watch</a>
                                    </span>

                                </span>
                                <p>{movie.overview}</p>
                                <div className="cast-soon">
                                    <h6>Cast & Director</h6>
                                    <div className="cast-soon-container col-12 d-flex gap-4">
                                        {/* Director */}
                                        <div className="actor-profile-container d-flex row col-2
                                        ">
                                            <div>
                                                {/* <img src={movie.director.profilePicture} alt={movie.title} className="actor-profile"/> */}
                                            </div>
                                            <div>
                                                {/* <h6  className="actor-name-soon">{movie.director.name}</h6> */}
                                                <span className="profile-description">Director</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span>
                                </span>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </>
                
                
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

