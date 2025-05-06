import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebaseUtils";

export const useRetrieveData = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const snapshot = await firestore.collection("cinewave").get();
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRows(data);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchMovies();
  }, []);

  return rows;
};
