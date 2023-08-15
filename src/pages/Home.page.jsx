import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getUpcomingMovies, searchMovie } from "../api/movieApi";
import Header from "../components/Header.component";
import MovieCard from "../components/MovieCard.component";
import SearchComponent from "../components/Search.component";
import classes from "./styles/Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!searchParams.get("query")?.trim())
      getUpcomingMovies(page)
        .then((response) => response.json())
        .then((data) => setMovieList((prev) => [...prev, ...data.results]))
        .catch((err) => console.error(err))
        .finally((res) => setLoading(false));
    else
      searchMovie(searchParams.get("query").trim(), page)
        .then((response) => response.json())
        .then((data) => setMovieList((prev) => [...prev, ...data.results]))
        .catch((err) => console.error(err))
        .finally((res) => setLoading(false));
  }, [page, searchParams]);
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const onClickCard = (movieId) => {
    navigate(`/detail/${movieId}`);
  };
  const headerLeftComponent = () => {
    return (
      <SearchComponent
        onSearch={(query) => {
          setLoading(true);
          setPage(1);
          setMovieList([]);
          if (query === searchParams.get("query")) query = query + " ";
          setSearchParams({ query });
        }}
      />
    );
  };
  return (
    <>
      <Header
        getLeftComponent={headerLeftComponent}
        onHomeButtonClick={() => {
          setPage(1);
          if (searchParams.size) setMovieList([]);
          setSearchParams({});
          navigate("/");
        }}
      />
      <div className={classes.list}>
        {movieList.map((movieInfo, index) => (
          <MovieCard
            key={"" + index + movieInfo.id}
            onClickCard={() => {
              onClickCard(movieInfo.id);
            }}
            movieInfo={movieInfo}
          />
        ))}
        {movieList.length === 0 && !loading && <h3>No Records Found.</h3>}
        {loading && <h3>...Loading...</h3>}
      </div>
    </>
  );
};

export default Home;
