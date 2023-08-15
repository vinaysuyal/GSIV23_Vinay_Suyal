import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieCast, getMovieDetails } from "../api/movieApi";
import Header from "../components/Header.component";
import MovieDetailComponent from "../components/MovieDetail.component";

const MovieDetail = () => {
  const navigate = useNavigate();
  let { movieID } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [credits, setMovieCredits] = useState({});
  useEffect(() => {
    getMovieDetails(movieID)
      .then((response) => response.json())
      .then((data) => setMovieDetail(data))
      .catch((err) => console.error(err));
    getMovieCast(movieID)
      .then((response) => response.json())
      .then((data) => setMovieCredits(data))
      .catch((err) => console.error(err));
  }, [movieID]);

  return (
    <div>
      <Header
        getLeftComponent={() => (
          <h2 style={{ margin: "0", color: "black" }}>Movie Details</h2>
        )}
        onHomeButtonClick={() => {
          navigate("/");
        }}
      />
      <div style={{ padding: "20px" }}>
        <MovieDetailComponent credits={credits} movieDetail={movieDetail} />
      </div>
    </div>
  );
};

export default MovieDetail;
