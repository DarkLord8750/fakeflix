// src/redux/movies/movies.actions.js
import { fetchMoviesFromApi } from "../../components/api/index";

// Action Types
export const fetchMoviesRequest = () => ({
  type: "FETCH_MOVIES_REQUEST",
});

export const fetchMoviesSuccess = (category, movies) => ({
  type: "FETCH_MOVIES_SUCCESS",
  payload: { category, movies },
});

export const fetchMoviesFailure = (error) => ({
  type: "FETCH_MOVIES_FAILURE",
  payload: error,
});

// ✅ Define the function BEFORE using or exporting it
export const fetchMoviesByCategory = (category) => {
  return async (dispatch) => {
    try {
      dispatch(fetchMoviesRequest());
      const response = await fetchMoviesFromApi(category); // Custom API call
      dispatch(fetchMoviesSuccess(category, response));
    } catch (error) {
      dispatch(fetchMoviesFailure(error));
    }
  };
};

// Category-specific thunks
export const fetchTrendingMoviesAsync = () => fetchMoviesByCategory("Trending");
export const fetchTopRatedMoviesAsync = () => fetchMoviesByCategory("Top Rated");
export const fetchNetflixMoviesAsync = () => fetchMoviesByCategory("Netflix");
export const fetchActionMoviesAsync = () => fetchMoviesByCategory("Action");
export const fetchAdventureMoviesAsync = () => fetchMoviesByCategory("Adventure");
export const fetchComedyMoviesAsync = () => fetchMoviesByCategory("Comedy");
export const fetchHorrorMoviesAsync = () => fetchMoviesByCategory("Horror");
export const fetchRomanceMoviesAsync = () => fetchMoviesByCategory("Romance");
export const fetchAnimationMoviesAsync = () => fetchMoviesByCategory("Animation");
export const fetchUpcomingMoviesAsync = () => fetchMoviesByCategory("Upcoming");
export const fetchLatestMoviesAsync = () => fetchMoviesByCategory("Latest");
