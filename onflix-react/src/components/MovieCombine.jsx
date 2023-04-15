import { useEffect, useState } from 'react';
import ReleaseIcon from '../assets/eye.svg'
import TimeIcon from '../assets/clock.svg'
import RateIcon from '../assets/star-fill.svg'
import PlayButton from '../assets/play-fill 1.svg'
import axios from 'axios';


function MovieCombine() {

    const [movie, setMovie] = useState([]);
    const apiKey = import.meta.env.REACT_APP_APIKEY;
    const baseURL = "https://api.themoviedb.org/3";

  const getDataMovie = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=aa4cf977385f47ebf8160e43b648a495`);

      console.log({iniDataListMovie : response.data.results}); 
      const movieWithCredits = response.data.results.map(async (val)=>{
        try {
          const resCredits = await axios.get(`https://api.themoviedb.org/3/movie/${data.id}`, {
            params: {
              api_key: apiKey,
              append_to_response: "videos,credits",}});
          val.director = resCredits.credits.crew.find((crew) => crew.job === "Director");
          val.trailer = resCredits.videos.results.find((video) => video.type === "Trailer");
          val.name = resCredits.data.name;
          val.cast = resCredits.data.credits.cast.slice(0, 4).map(({ name, character, profile_path }) => ({
            name,
            character,
            profilePicture: profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : null,
          }));

        } catch (error) {
          val.director = '- (not found)';
          val.trailer = '- (not found)';
          val.cast = '- (not found)';
        }
        return val;
      });

      console.log({iniArrayOfPromise : movieWithCredits});
      let resultMovieWithCredits = await Promise.all(movieWithCredits);

      console.log({iniSudahJadiHasil : resultMovieWithCredits});

      setMovie(resultMovieWithCredits);

    } catch (error) {
      console.log('error get list movie');
    }

  }

  useEffect(()=>{
    getDataMovie();
  },[]);




    const PopularMovieList = () => {
        return movie.map((data, idx) => {
            return(
                <>
                {/* Card */}
                <div className="card bg-dark text-white col-lg-2 col-md-3 col-sm-4 col-4" key={idx}>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster}`} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex align-items-end">
                        <div className="rate-label position-absolute end-0"><img src={RateIcon} alt="" /> {data.rating}</div>
                        <div className="text-container position-absolute" >
                            <div className="info-icons">
                                <span className="info-label">
                                    <img src={TimeIcon} alt="" />105 Minutes</span>
                                <span className="info-label">
                                    <img src={ReleaseIcon} alt="" />{data.release_date}</span>
                            </div>
                            <h5 className="card-title col-12">{data.title}</h5>
                            <span className='ButtonWrapper col-12'>
                                <button type="button" className="btn btn-warning btn-view col-5" data-bs-toggle="modal" data-bs-target={`#movieModal${data.id}`}>View</button>
                                <a className="btn btn-secondary btn-watch col-5" href="https://www.youtube.com/watch?v=bK6ldnjE3Y0&t=2s" role="button" target="blank"><img src={PlayButton} alt="" className="watch-icon" /> Watch</a>
                            </span>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                <div className="modal modal-lg fade" id={`movieModal${data.id}` }tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" key={idx}>
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                        
                        {/* Header Img */}
                        <div className="position-relative">
                            <div className="landscapePosterOverlay"><button type="button" className="btn-close end-0" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="container-fluid d-flex container-landscape-poster">
                                <img src= {`https://image.tmdb.org/t/p/w1280${data.backdrop}`} alt={data.title} className="landscape-poster"/>
                            </div>
                        </div>
                        <div className="container-fluid d-flex modal-content-container">
                            <div id="modal-content-container" className="container-fluid d-flex">
                                {/* Container 1 : Poster */}
                            <div className="col-5 modal-regular-poster-container">
                                <img src={`https://image.tmdb.org/t/p/w500/${data.poster}`} alt={data.title} className="regular-poster-modal " style={{ borderRadius: '1.5rem' }}/>
                            </div>
                            {/* Container 2 : Description */}
                            <div className="col-7 modal-description">
                                <img src={`https://image.tmdb.org/t/p/w500/${data.poster}`} alt={data.title} className="regular-poster-modal " style={{ borderRadius: '1.5rem' }}/>
                                <h1 id="modal-title">{data.title}</h1>
                                <span >
                                    <span className="info-label-modal"> <img src={TimeIcon} alt={data.title}/>{data.runtime} Minutes</span>
                                    <span className="info-label-modal"> <img src={ReleaseIcon} alt={data.title}/>{data.release_date}</span>
                                    <span className="rate-label-header"> <img src={RateIcon} alt=""/>{movies.rating}</span>
                                </span>
                                <span>
                                    <span>
                                        <a className="btn btn-secondary col-6 " href={data.trailer} 
                                        role="button" target="blank"><img src={PlayButton} alt={data.title} className="watch-icon" /> Watch</a>
                                    </span>

                                </span>
                                <p>{data.overview}</p>
                                <div className="cast-soon">
                                    <h6>Cast & Director</h6>
                                    <div className="cast-soon-container col-12 d-flex gap-4">
                                        {/* Director */}
                                        <div className="actor-profile-container d-flex row col-2
                                        ">
                                            <div>
                                                <img src={data.director.profilePicture} alt={data.title} className="actor-profile"/>
                                            </div>
                                            <div>
                                                <h6  className="actor-name-soon">{data.director.name}</h6>
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

export default MovieCombine;



