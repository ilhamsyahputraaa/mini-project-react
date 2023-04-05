

function Header () {
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
                    <div className="header-tenet container-fluid">
                        <div className="row d-flex align-items-center header-content color-overlay">
                            {/* Description */}
                            <div className="header-description col-lg-4 col-sm-12">
                                <h1 className="mb-4
                                ">Oppenheimer</h1>
                                <div className="info-icons mb-4">
                                    <span className="rate-label-header"> Action </span>
                                    <span className="info-label-header"> <img src="src/clock.svg" alt=""/>105 Minutes</span>
                                    <span className="info-label-header"> <img src="src/eye.svg" alt=""/>12,7 K</span>
                                </div>
                                <p className="mb-4">The story of American scientist J. Robert Oppenheimer works with a team of scientists during the Manhattan Project, leading to the development of the atomic bomb.</p>
                                <span>
                                    <button type="button" className="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">View Detail</button>

                                    <a className="btn btn-secondary " href="https://www.youtube.com/watch?v=bK6ldnjE3Y0&t=2s" role="button" target="blank"><img src="./src/play-fill 1.svg" alt="" className="watch-icon" /> Watch Trailer</a>
                                </span>
                                
                            </div>

                        </div>

                    </div>
                    
                </div>
                {/* carousel 2 */}
                <div className="carousel-item" data-bs-interval="5000" >
                    <div className="header-dunkirk">
                    <div className="row d-flex align-items-center header-content color-overlay">
                        {/* Description */}
                        <div className="header-description col-lg-4 col-sm-12">
                            <h1 className="mb-4
                            ">Dunkirk</h1>
                            <div className="info-icons mb-4">
                                <span className="rate-label-header"> Action </span>
                                <span className="info-label-header"> <img src="src/clock.svg" alt=""/>122 Minutes</span>
                                <span className="info-label-header"> <img src="src/eye.svg" alt=""/>19 M</span>
                            </div>
                            <p className="mb-4">Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.</p>
                            <span>
                                <button type="button" className="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">View Detail</button>

                                <a className="btn btn-secondary " href="https://www.youtube.com/watch?v=T7O7BtBnsG4" role="button" target="blank"><img src="./src/play-fill 1.svg" alt="" className="watch-icon" /> Watch Trailer</a>
                            </span>
                            
                        </div>

                    </div>

                    </div>
                </div>

                {/* carousel 3 */}
                <div className="carousel-item" data-bs-interval="5000" >
                    <div className="header-inter">
                        <div className="row d-flex align-items-center header-content color-overlay">
                            {/* Description */}
                            <div className="header-description col-lg-4 col-sm-12">
                                <h1 className="mb-4
                                ">Interstellar</h1>
                                <div className="info-icons mb-4">
                                    <span className="rate-label-header"> Action </span>
                                    <span className="info-label-header"> <img src="src/clock.svg" alt=""/>132 Minutes</span>
                                    <span className="info-label-header"> <img src="src/eye.svg" alt=""/>27 M</span>
                                </div>
                                <p className="mb-4">A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.</p>
                                <span>
                                    <button type="button" className="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">View Detail</button>

                                    <a className="btn btn-secondary " href="https://www.youtube.com/watch?v=Lm8p5rlrSkY" role="button" target="blank"><img src="./src/play-fill 1.svg" alt="" className="watch-icon" /> Watch Trailer</a>
                                </span>
                                
                            </div>

                            {/* Poster */}

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

export default Header;