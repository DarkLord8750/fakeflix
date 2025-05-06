// ✅ src/components/api/index.js
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebaseUtils';

export const fetchMoviesFromApi = async (category) => {
  const querySnapshot = await getDocs(collection(db, category));
  const movies = [];
  querySnapshot.forEach((doc) => {
    movies.push({ id: doc.id, ...doc.data() });
  });
  return movies;
};