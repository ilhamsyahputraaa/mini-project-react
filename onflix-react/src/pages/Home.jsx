import MovieCard from "../components/MovieCard";
import '../App.css'
import NavigationBar from "../components/NavigationBar";
import ComingSoon from "../components/ComingSoon";
import HeaderCarousel from "../components/HeaderCarousel";

function Home() {

  return (
    <div className="Home">
      <NavigationBar />
      <HeaderCarousel />
      <MovieCard />
      <ComingSoon />
    </div>
  )
}

export default Home;
