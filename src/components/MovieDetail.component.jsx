import { Card, CardMedia, Typography } from "@mui/material";
import classes from "./styles/MovieDetails.module.css";

const MovieDetailComponent = ({ credits, movieDetail }) => {
  function convertMinutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedTime = `${String(hours).padStart(2, "0")}h ${String(
      remainingMinutes
    ).padStart(2, "0")}m`;
    return formattedTime;
  }
  return (
    <div className={classes.movieDetailsContainer}>
      <div className="leftDetail">
        <Card sx={{ borderRadius: "12px" }}>
          <CardMedia
            sx={{
              height: "276px",
              width: "185px",
              backgroundSize: "cover",
            }}
            image={
              movieDetail.poster_path
                ? `https://image.tmdb.org/t/p/w185${movieDetail.poster_path}`
                : "https://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png"
            }
            title="green iguana"
          />
        </Card>
      </div>
      <div style={{ marginLeft: "20px" }} className="rightDetail">
        <Typography
          style={{ display: "inline" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {movieDetail.title}
        </Typography>
        <Typography
          style={{ display: "inline", marginLeft: "0.5rem" }}
          gutterBottom
          variant="h6"
          component="div"
        >
          ({movieDetail.vote_average}/10)
        </Typography>
        <div className={classes.subInfo}>
          <span>{movieDetail.release_date?.split("-")[0]}</span>
          <span className={classes.pipeSeperator}>|</span>
          <span>{convertMinutesToTime(movieDetail.runtime)}</span>
          <span className={classes.pipeSeperator}>|</span>
          <span>
            {credits.crew?.find((member) => member.job === "Director")?.name}
          </span>
        </div>
        <p>
          Cast: {credits.cast?.map((castMember) => castMember?.name).join(", ")}
        </p>
        <Typography variant="body2" color="text.secondary">
          {movieDetail.overview}
        </Typography>
      </div>
    </div>
  );
};
export default MovieDetailComponent;
