import MovieCard from "../components/MovieCard";
import '../App.css'
import NavigationBar from "../components/NavigationBar";
import ComingSoon from "../components/ComingSoon";
import HeaderCarousel from "../components/HeaderCarousel";
import Footer from "../components/Footer";
import TopRated from "../components/TopRated";

function Home() {

  return (
    <div className="Home">
      <NavigationBar />
      <HeaderCarousel />
      <TopRated />
      <MovieCard />
      <ComingSoon />
      <Footer />
    </div>
  )
}

export default Home;
