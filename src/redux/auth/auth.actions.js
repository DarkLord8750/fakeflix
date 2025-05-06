import { auth, googleProvider } from "../../firebase/firebaseUtils";
// import { store } from "../store";

// Action Types
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

// Action Creators
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

// Google Sign-In
export const signInWithGoogleAsync = () => {
  return async (dispatch) => {
    try {
      const { user } = await auth.signInWithPopup(googleProvider);
      dispatch(setUser(user));
    } catch (error) {
      console.log("Google sign-in error:", error.message);
    }
  };
};

// Email Sign-In (optional)
export const emailSignInStart = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      dispatch(setUser(user));
    } catch (error) {
      console.log("Email sign-in error:", error.message);
    }
  };
};

// Sign-Up (optional)
export const signUpStart = (email, password, displayName) => {
  return async (dispatch) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await user.updateProfile({ displayName });
      dispatch(setUser(user));
    } catch (error) {
      console.log("Sign-up error:", error.message);
    }
  };
};

// Sign-Out
export const signOutAsync = () => {
  return async (dispatch) => {
    try {
      await auth.signOut();
      dispatch(clearUser());
    } catch (error) {
      console.log("Sign-out error:", error.message);
    }
  };
};

// Auto login check
export const checkUserSession = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
  };
};

// Anonymous Sign-In (optional)
export const anonymousSignInStart = () => {
  return async (dispatch) => {
    try {
      const { user } = await auth.signInAnonymously();
      dispatch(setUser(user));
    } catch (error) {
      console.log("Anonymous sign-in error:", error.message);
    }
  };
};

// Google Sign-In (named export for compatibility)
export const googleSignInStart = signInWithGoogleAsync;
