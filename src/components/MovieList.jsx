// src/components/MovieList.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByCategory } from "../redux/movies/movies.actions";

const MovieList = ({ category }) => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesByCategory(category));
  }, [category, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{category} Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
