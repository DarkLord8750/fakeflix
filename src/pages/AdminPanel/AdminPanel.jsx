import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/auth.selectors";
import { signOutAsync } from "../../redux/auth/auth.actions";
import { fetchMoviesByCategory } from "../../redux/movies/movies.actions";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser) {
      const categories = ["trending", "action", "comedy", "romance", "horror"];
      categories.forEach((category) => {
        dispatch(fetchMoviesByCategory(category));
      });
    }
  }, [dispatch, currentUser]);

  const handleSignOut = () => {
    dispatch(signOutAsync());
  };

  return (
    <div className="AdminPanel">
      <h2>Admin Panel</h2>
      {currentUser ? (
        <>
          <p>Welcome, {currentUser.displayName}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Please log in</p>
      )}
      {/* Render movie list */}
    </div>
  );
};

export default AdminPanel;
