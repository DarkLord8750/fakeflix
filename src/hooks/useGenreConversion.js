// hooks/useGenreConversion.js
const useGenreConversion = (genreIds) => {
  if (!Array.isArray(genreIds)) {
    return []; // Return an empty array if genreIds is not an array
  }
  return genreIds.slice(0, 3); // Slice the genre array to a maximum of 3 genres
};

export default useGenreConversion;
