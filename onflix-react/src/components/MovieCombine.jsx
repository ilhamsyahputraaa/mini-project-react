import { useEffect, useState } from 'react';
import ReleaseIcon from '../assets/eye.svg'
import TimeIcon from '../assets/clock.svg'
import RateIcon from '../assets/star-fill.svg'
import PlayButton from '../assets/play-fill 1.svg'
import { getMovieDetails } from '../api/movieapi';


const MovieCombine = () => {

    const [movies, setMovie] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
          const moviesData = await getMovieDetails();
          setMovie(moviesData);
        }
    
        fetchMovies();
    }, []);


    const PopularMovieList = () => {
        {movies.map((movie) => (
            
            <div className='cardAndModal'>
                {/* Card */}
                <div className="card bg-dark text-white col-lg-2 col-md-3 col-sm-4 col-4" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex align-items-end">
                        <div className="rate-label position-absolute end-0"><img src={RateIcon} alt="" /> {movie.vote_average}</div>
                        <div className="text-container position-absolute" >
                            <div className="info-icons">
                                <span className="info-label">
                                    <img src={TimeIcon} alt="" />{movie.runtime} Minutes</span>
                                <span className="info-label">
                                    <img src={ReleaseIcon} alt="" />{movie.release_date}</span>
                            </div>
                            <h5 className="card-title col-12">{movie.title}</h5>
                            <span className='ButtonWrapper col-12'>
                                <button type="button" className="btn btn-warning btn-view col-5" data-bs-toggle="modal" data-bs-target="#exampleModal3">View</button>
                                <a className="btn btn-secondary btn-watch col-5" href={movie.trailer} role="button" target="blank"><img src={PlayButton} alt="" className="watch-icon" /> Watch</a>
                            </span>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                <div className="modal modal-lg fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                        
                        {/* Header Img */}
                        <div className="position-relative">
                            <div className="landscapePosterOverlay"><button type="button" className="btn-close end-0" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="container-fluid d-flex container-landscape-poster">
                                <img src= {movie.backdrop} alt="" className="landscape-poster"/>
                            </div>
                        </div>
                        <div className="container-fluid d-flex modal-content-container">
                            <div id="modal-content-container" className="container-fluid d-flex">
                                {/* Container 1 : Poster */}
                            <div className="col-5 modal-regular-poster-container">
                                <img src={movie.poster} alt="" className="regular-poster-modal " style="border-radius: 1.5rem;"/>
                            </div>
                            {/* Container 2 : Description */}
                            <div className="col-7 modal-description">
                                <img src={movie.poster} alt="" className="regular-poster-modal " style="border-radius: 1.5rem;"/>
                                <h1 id="modal-title">{movie.title}</h1>
                                <span >
                                    <span className="info-label-modal"> <img src="src/clock.svg" alt=""/>{movie.runtime} Minutes</span>
                                    <span className="info-label-modal"> <img src="src/eye.svg" alt=""/>{movie.release_date}</span>
                                </span>
                                <span>
                                    <span>
                                        <a className="btn btn-secondary col-6 btn-view-modal" href={movie.trailer} 
                                        role="button" target="blank"><img src="./src/play-fill 1.svg" alt="" className="watch-icon" /> Watch</a>
                                    </span>
                                    
                                    <button type="button" className="btn btn-secondary btn-stroke"> <img src="./src/heart 1.svg" alt="" className="watch-icon"/></button>
                                    <button type="button" className="btn btn-secondary btn-stroke"> <img src="./src/share-fill 1.svg" alt="" className="watch-icon"/></button>

                                </span>
                                <p>{movie.overview}</p>
                                <div id="genres">
                                    <span className="rate-label-modal"> {movie.genres}</span>


                                </div>
                                <div className="cast-soon">
                                    <h6>Cast & Director</h6>
                                    <div className="cast-soon-container col-12 d-flex gap-4">
                                        {/* Director */}
                                        <div className="actor-profile-container d-flex row col-2
                                        ">
                                            <div>
                                                <img src={movie.director.profilePicture} alt="" className="actor-profile"/>
                                            </div>
                                            <div>
                                                <h6  className="actor-name-soon">{movie.director.name}</h6>
                                                <span className="profile-description">Director</span>
                                            </div>
                                        </div>
                                        {/* Cast 1 */}
                                        {cast}
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
            </div>
        ))}
    }



    return (
        <>
            
        <div className="column d-flex justify-content-start col-12  position-relative me-3 ms-3 product-card-container">
            <PopularMovieList />
        </div>
        
        </>
    )
}

export default MovieCombine;



