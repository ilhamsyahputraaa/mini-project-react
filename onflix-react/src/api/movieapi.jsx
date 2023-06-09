import axios from "axios";

const apiKey = import.meta.env.REACT_APP_APIKEY;
const baseURL = "https://api.themoviedb.org/3";

export const getMovieDetails = async (movieId) => {
  try {
    const popularMovies = await axios.get(`${baseURL}/movie/popular`, {
      params: {
        api_key: apiKey,
      },
    });

    const movies = await Promise.all(
      popularMovies.data.results.map(async (movie) => {
        const { data } = await axios.get(`${baseURL}/movie/${movie.id}`, {
          params: {
            api_key: apiKey,
            append_to_response: "videos,credits",
          },
        });

        const director = data.credits.crew.find((crew) => crew.job === "Director");
        const trailer = data.videos.results.find((video) => video.type === "Trailer");
        const cast = data.credits.cast.slice(0, 4).map(({ name, character, profile_path }) => ({
          name,
          character,
          profilePicture: profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : null,
        }));

        return {
          id: data.id,
          title: data.title,
          poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          backdrop: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
          runtime: data.runtime,
          overview: data.overview,
          release_date: data.release_date,
          rating: data.vote_average,
          genres: data.genres.map((genre) => genre.name).join(", "),
          director: {
            name: director ? director.name : "",
            profilePicture: director && director.profile_path ? `https://image.tmdb.org/t/p/w500${director.profile_path}` : null,
          },
          trailer: trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : "",
          cast,
        };
      })
    );

    return movies;
  } catch (error) {
    console.log(error);
  }
};

export const apiTmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Accept:"application/json"
    },
    params: {
        api_key: "aa4cf977385f47ebf8160e43b648a495",
    },
})