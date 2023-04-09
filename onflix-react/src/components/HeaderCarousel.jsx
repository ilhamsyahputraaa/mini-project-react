import { useEffect, useState } from 'react';
import Axios from 'axios';
import ReleaseIcon from '../assets/eye.svg'
import TimeIcon from '../assets/clock.svg'
import RateIcon from '../assets/star-fill.svg'
import PlayButton from '../assets/play-fill 1.svg'


function HeaderCarousel () {
    const [data, setData] = useState ([0])

    useEffect(() => {
    Axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=aa4cf977385f47ebf8160e43b648a495&page=1&region=US&language=en-US',
    })
        .then(function (response) {
            console.log(response.data.results)
            setData(response.data.results)
        });
}, [])

    return (
        <>
        <section id="header-carousel">
        <div id="carouselHeader" className="carousel slide" data-bs-ride="carousel">
            {/* indicator Carousel */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
                {/* carousel 1 */}
                <div className="carousel-item active" data-bs-interval="5000" >
                    <div className="header-tenet" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280${data[0].backdrop_path}')`}}>
                        <div className="row d-flex align-items-center header-content color-overlay">
                            {/* Description */}
                            <div className="header-description col-lg-4 col-sm-12">
                                <h1 className="mb-4
                                ">{data[0].original_title}</h1>
                                <div className="info-icons mb-4">
                                    <span className="rate-label-header"> <img src={RateIcon} alt=""/>{data[0].vote_average}</span>
                                    <span className="info-label-header"> <img src={TimeIcon} alt=""/>105 Minutes</span>
                                    <span className="info-label-header"> <img src={ReleaseIcon} alt=""/>{data[0].release_date}</span>
                                </div>
                                <p className="mb-4">{data[0].overview}</p>
                                <span>
                                    <button type="button" className="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">View Detail</button>

                                    <a className="btn btn-secondary " href="https://www.youtube.com/watch?v=bK6ldnjE3Y0&t=2s" role="button" target="blank"><img src={PlayButton} alt="" className="watch-icon" /> Watch Trailer</a>
                                </span>
                                
                            </div>

                        </div>

                    </div>
                    
                </div>
                {/* carousel 2 */}
                <div className="carousel-item" data-bs-interval="5000" >
                <div className="header-tenet" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280${data[1].backdrop_path}')`}}>
                        <div className="row d-flex align-items-center header-content color-overlay">
                            {/* Description */}
                            <div className="header-description col-lg-4 col-sm-12">
                                <h1 className="mb-4
                                ">{data[1].original_title}</h1>
                                <div className="info-icons mb-4">
                                    <span className="rate-label-header"> <img src={RateIcon} alt=""/>{data[1].vote_average}</span>
                                    <span className="info-label-header"> <img src={TimeIcon} alt=""/>105 Minutes</span>
                                    <span className="info-label-header"> <img src={ReleaseIcon} alt=""/>{data[1].release_date}</span>
                                </div>
                                <p className="mb-4">{data[1].overview}</p>
                                <span>
                                    <button type="button" className="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">View Detail</button>

                                    <a className="btn btn-secondary " href="https://www.youtube.com/watch?v=bK6ldnjE3Y0&t=2s" role="button" target="blank"><img src={PlayButton} alt="" className="watch-icon" /> Watch Trailer</a>
                                </span>
                                
                            </div>

                        </div>

                    </div>
                </div>

                {/* carousel 3 */}
                <div className="carousel-item" data-bs-interval="5000" >
                <div className="header-tenet" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280${data[2].backdrop_path}')`}}>
                        <div className="row d-flex align-items-center header-content color-overlay">
                            {/* Description */}
                            <div className="header-description col-lg-4 col-sm-12">
                                <h1 className="mb-4
                                ">{data[2].original_title}</h1>
                                <div className="info-icons mb-4">
                                    <span className="rate-label-header"> <img src={RateIcon} alt=""/>{data[2].vote_average}</span>
                                    <span className="info-label-header"> <img src={TimeIcon} alt=""/>105 Minutes</span>
                                    <span className="info-label-header"> <img src={ReleaseIcon} alt=""/>{data[2].release_date}</span>
                                </div>
                                <p className="mb-4">{data[2].overview}</p>
                                <span>
                                    <button type="button" className="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">View Detail</button>

                                    <a className="btn btn-secondary " href="https://www.youtube.com/watch?v=bK6ldnjE3Y0&t=2s" role="button" target="blank"><img src={PlayButton} alt="" className="watch-icon" /> Watch Trailer</a>
                                </span>
                                
                            </div>

                        </div>

                    </div>
                </div>
                
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