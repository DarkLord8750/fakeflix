// ✅ src/redux/movies/movies.reducer.js
const INITIAL_STATE = {
    moviesByCategory: {},
    isLoading: false,
    error: null,
  };
  
  const moviesReducer = (state = INITIAL_STATE, action) => {
    const { type, payload, category } = action;
  
    switch (type) {
      case 'FETCH_MOVIES_REQUEST':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_MOVIES_SUCCESS':
        return {
          ...state,
          isLoading: false,
          moviesByCategory: {
            ...state.moviesByCategory,
            [category]: payload,
          },
        };
      case 'FETCH_MOVIES_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: payload,
        };
      default:
        return state;
    }
  };
  
  export default moviesReducer;