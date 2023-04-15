import { useEffect, useState } from 'react';
import Axios from 'axios';
import ReleaseIcon from '../assets/eye.svg'
import TimeIcon from '../assets/clock.svg'
import RateIcon from '../assets/star-fill.svg'
import PlayButton from '../assets/play-fill 1.svg'

// 


function HeaderCarousel () {
    const [movie, SetMovie] = useState ([])
    // const baseImageURL =  import.meta.env.REACT_APP_BASEURL
    

    useEffect(() => {
    Axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=aa4cf977385f47ebf8160e43b648a495&page=1&region=US&language=en-US',
    })
        .then(function (response) {
            console.log(response.data.results)
            SetMovie(response.data.results.slice(0,8))
        });
}, [])

    return (
        <>
        <section id="header-carousel">
        <div id="carouselHeader" className="carousel slide" data-bs-ride="carousel">
            {/* indicator Carousel */}

            <div className="carousel-inner">
                {movie.map((val, idx)=> {
                    return (
                        <div className={`carousel-item ${idx===0 ? 'active' : ''}`} key={idx} data-bs-interval="4000" >
                            <div className="header-tenet" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${val.backdrop_path})`}}>
                                <div className="row d-flex align-items-center header-content color-overlay">
                                    {/* Description */}
                                    <div className="header-description col-lg-4 col-sm-12">
                                        <h1 className="mb-4">{val.original_title}</h1>
                                        <div className="info-icons mb-4">
                                            <span className="rate-label-header"> <img src={RateIcon} alt=""/>{val.vote_average}</span>
                                            <span className="info-label-header"> <img src={TimeIcon} alt=""/>{val.release_date}</span>
                                            <span className="info-label-header"> <img src={ReleaseIcon} alt=""/>ID-{val.id}</span>
                                        </div>
                                        <p className="mb-4">{val.overview}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                })}
                
            </div>

            {/* Carousel Control */}
            <button className="carousel-control-next" type="button" data-bs-target="#carouselHeader" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            
        </div>

        </section>
        </>
    )
}

export default HeaderCarousel;