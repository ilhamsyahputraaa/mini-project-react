import cardImage from '../assets/regular-poster/Creed.png'
import Axios from 'axios'
import { useEffect, useState } from 'react'


function WatchList() {


    
    useEffect(() => {
        Axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/movie/popular?api_key=aa4cf977385f47ebf8160e43b648a495&page=1&region=US&language=en-US',
        })
            .then(function (response) {
                // console.log(response)
                // setData(response.data.data)
            });
    }, [])
    return (
        <>
            {/* Card */}
            <div className="card bg-dark text-white col-lg-2 col-md-3 col-sm-4 col-4">
                <img src={cardImage} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex align-items-end">
                    <div className="rate-label position-absolute end-0"> Action</div>
                    <div className="text-container position-absolute" >
                        <div className="info-icons">
                            <span className="info-label">
                                <img src="src/clock.svg" alt="" />105 Minutes</span>
                            <span className="info-label">
                                <img src="src/eye.svg" alt="" />12,7 K</span>
                        </div>
                        <h5 className="card-title col-12">Tenet</h5>
                        <span>
                            <button type="button" className="btn btn-warning btn-view col-5" data-bs-toggle="modal" data-bs-target="#exampleModal3">View</button>
                            <a className="btn btn-secondary btn-watch col-6" href="https://www.youtube.com/watch?v=bK6ldnjE3Y0&t=2s" role="button" target="blank"><img src="./src/play-fill 1.svg" alt="" className="watch-icon" /> Watch</a>
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
                                    <img src="./src/Poster-landscape/Oppenheimer-landscape.png" alt="" className="landscape-poster" />
                                </div>
                            </div>
                            <div className="container-fluid d-flex modal-content-container">
                                <div id="modal-content-container" className="container-fluid d-flex">
                                    {/* Container 1 : Poster */}
                                    <div className="col-5 modal-regular-poster-container">
                                        <img src="./src/regular-poster/oppenheimer-poster.png" alt="" className="regular-poster-modal " style="border-radius: 1.5rem;" />
                                    </div>
                                    {/* Container 2 : Description */}
                                    <div className="col-7 modal-description">
                                        <img src="./src/regular-poster/oppenheimer-poster.png" alt="" className="regular-poster-modal " style="border-radius: 1.5rem;" />
                                        <h1 id="modal-title">Oppenheimer</h1>
                                        <span >
                                            <span className="info-label-modal"> <img src="src/clock.svg" alt="" />123 Minutes</span>
                                            <span className="info-label-modal"> <img src="src/eye.svg" alt="" />43 M</span>
                                        </span>
                                        <span>
                                            <span>
                                                <a className="btn btn-secondary col-6 btn-view-modal" href="https://www.youtube.com/watch?v=bK6ldnjE3Y0&t=2s" role="button" target="blank"><img src="./src/play-fill 1.svg" alt="" className="watch-icon" /> Watch</a>
                                            </span>

                                            <button type="button" className="btn btn-secondary btn-stroke"> <img src="./src/heart 1.svg" alt="" className="watch-icon" /></button>
                                            <button type="button" className="btn btn-secondary btn-stroke"> <img src="./src/share-fill 1.svg" alt="" className="watch-icon" /></button>

                                        </span>
                                        <p>The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.</p>
                                        <div id="genres">
                                            <span className="rate-label-modal"> Biography</span>
                                            <span className="rate-label-modal"> Drama</span>
                                            <span className="rate-label-modal"> Action</span>
                                            


                                        </div>
                                        <div className="cast-soon">
                                            <h6>Cast & Director</h6>
                                            <div className="cast-soon-container col-12 d-flex gap-4">
                                                {/* Cast 1 */}
                                                <div className="actor-profile-container d-flex row col-2
                                        ">
                                                    <div>
                                                        <img src="./src/profile-actor/christoper Nolan.png" alt="" className="actor-profile" />
                                                    </div>
                                                    <div>
                                                        <h6 className="actor-name-soon">Christoper Nolan</h6>
                                                        <span className="profile-description">Director</span>
                                                    </div>
                                                </div>
                                                {/* Cast 1 */}
                                                <div className="actor-profile-container d-flex row col-2">
                                                    <div>
                                                        <img src="./src/profile-actor/Cillian Murphy.png" alt="" className="actor-profile" />
                                                    </div>
                                                    <div>
                                                        <h6 className="actor-name-soon">Cillian Murphy</h6>
                                                        <span className="profile-description">Robert Oppenheimer</span>
                                                    </div>
                                                </div>
                                                {/* Cast 1 */}
                                                <div className="actor-profile-container d-flex row col-2
                                        ">
                                                    <div>
                                                        <img src="./src/profile-actor/Emily Blunt.png" alt="" className="actor-profile" />
                                                    </div>
                                                    <div>
                                                        <h6 className="actor-name-soon">Emily Blunt</h6>
                                                        <span className="profile-description">Kitty Oppenheimer</span>
                                                    </div>
                                                </div>
                                                {/* Cast 1 */}
                                                <div className="actor-profile-container d-flex row col-2">
                                                    <div>
                                                        <img src="./src/profile-actor/Matt Damon.png" alt="" className="actor-profile" />
                                                    </div>
                                                    <div>
                                                        <h6 className="actor-name-soon">Matt Damon</h6>
                                                        <span className="profile-description">Leslie Groves</span>
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
}

export default WatchList;

