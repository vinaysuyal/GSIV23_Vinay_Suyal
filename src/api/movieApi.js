const API_KEY = "1f4769e4e232073451edfe273d1669dd";
const base_url = "https://api.themoviedb.org/3";

export const getUpcomingMovies = async (page) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  // const response = await fetch(
  //   `${base_url}/movie/upcoming?language=en-US&api_key=${API_KEY}&sort_by=primary_release_date.desc&page=${page}`,
  //   requestOptions
  // );
  try {
    const response = await fetch(
      `${base_url}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&sort_by=primary_release_date.asc&primary_release_date.gte=${formattedDate}`,
      requestOptions
    );
    if (response.ok) return response;
  } catch (e) {
    console.error(e);
  }
};

export const searchMovie = async (query, page) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  try {
    const response = await fetch(
      `${base_url}/search/movie?query=${query}&api_key=${API_KEY}&page=${page}`,
      requestOptions
    );
    if (response.ok) return response;
  } catch (e) {
    console.error(e);
  }
};

export const getMovieDetails = async (movieId) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  try {
    const response = await fetch(
      `${base_url}/movie/${movieId}?language=en-US&api_key=${API_KEY}`,
      requestOptions
    );
    if (response.ok) return response;
  } catch (e) {
    console.error(e);
  }
};

export const getMovieCast = async (movieId) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${base_url}/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`,
      requestOptions
    );
    if (response.ok) return response;
  } catch (e) {
    console.error(e);
  }
};
