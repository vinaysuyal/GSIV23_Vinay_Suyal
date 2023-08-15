import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import classes from "./styles/MovieCard.module.css";

const MovieCard = ({ movieInfo, onClickCard }) => {
  return (
    <>
      <Card sx={{ borderRadius: "12px", textAlign: "left" }}>
        <CardActionArea onClick={onClickCard} sx={{ height: "100%" }}>
          <div style={{ height: "100%" }}>
            <CardMedia
              sx={{ height: 140, backgroundSize: "contain" }}
              image={
                movieInfo.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`
                  : "https://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png"
              }
              title={movieInfo.title}
            />

            <CardContent>
              <div className={classes.titleRatingCard}>
                <Typography noWrap gutterBottom variant="h5" component="div">
                  {movieInfo.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {movieInfo.vote_average}/10
                </Typography>
              </div>
              <div className={classes.descriptionContainer}>
                <Typography noWrap variant="body2" color="text.secondary">
                  {movieInfo.overview}
                </Typography>
              </div>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </>
  );
};
export default MovieCard;
