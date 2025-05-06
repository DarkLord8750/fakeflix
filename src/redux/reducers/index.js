import { combineReducers } from 'redux';
import authReducer from '../auth/auth.reducer'; // Import your authReducer
import moviesReducer from '../movies/movies.reducer'; // If you have a movies reducer

const rootReducer = combineReducers({
  auth: authReducer,  // Your auth state
  movies: moviesReducer,  // Your movies state
});

export default rootReducer;
