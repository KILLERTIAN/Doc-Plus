import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, signInWithPhoneNumber } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [userRole, setUserRole] = useState(null); // State for user role
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await initializeUser(user); // Await to make sure user role is fetched
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    setCurrentUser(user);
    const isEmail = user.providerData.some(
      (provider) => provider.providerId === "password"
    );
    setIsEmailUser(isEmail);
    setUserLoggedIn(true);
    try {
      const userRole = await fetchUserRoleFromFirestore(user.uid);
      setUserRole(userRole);
    } catch (error) {
      console.error('Failed to fetch user role:', error);
    }
    setLoading(false);
  }

  async function logout() {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setUserLoggedIn(false);
      // setUserRole(null); // Reset user role on logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  async function loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // The `onAuthStateChanged` listener will handle the rest
    } catch (error) {
      console.error('Google login failed:', error);
    }
  }

  async function loginWithPhone(phoneNumber, recaptchaVerifier) {
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
      // You'll need to handle the confirmationResult to complete the sign-in process
    } catch (error) {
      console.error('Phone login failed:', error);
    }
  }

  const value = {
    userLoggedIn,
    isEmailUser,
    currentUser,
    userRole,
    logout,
    loginWithGoogle,
    loginWithPhone
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Function to fetch user role from Firestore
async function fetchUserRoleFromFirestore(uid) {
  // Implement your logic to fetch user role from Firestore here
  // Return user role
}
