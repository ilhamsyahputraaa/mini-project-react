import MovieCard from "../components/MovieCard";
import '../App.css'
import NavigationBar from "../components/NavigationBar";
import ComingSoon from "../components/ComingSoon";
import HeaderCarousel from "../components/HeaderCarousel";
import MovieCombine from "../components/MovieCombine";

function Home() {

  return (
    <div className="Home">
      <NavigationBar />
      {/* <HeaderCarousel /> */}
      <MovieCombine />
      <MovieCard />
      <ComingSoon />
    </div>
  )
}

export default Home;
