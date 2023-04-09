import cardImage from '../assets/regular-poster/Creed.png'
import { useEffect, useState } from 'react';
import Axios from 'axios';

function RegularCard() {
    const [data, setData] = useState ([])

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
            <h1> {data[6].original_title}</h1>
            
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
                        <h5 className="card-title col-12">{data[0].original_title}</h5>
                        <span>
                            <button type="button" className="btn btn-warning btn-view col-5" data-bs-toggle="modal" data-bs-target="#exampleModal3">View</button>
                            <a className="btn btn-secondary btn-watch col-6" href="https://www.youtube.com/watch?v=bK6ldnjE3Y0&t=2s" role="button" target="blank"><img src="./src/play-fill 1.svg" alt="" className="watch-icon" /> Watch</a>
                        </span>
                    </div>
                </div>
            </div>
            <h1>testing</h1>

            {/* Modal */}
        </>
    )
}

export default RegularCard;