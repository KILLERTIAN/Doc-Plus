import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        initializeUser(user);
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
    setLoading(false);
  }

  async function logout() {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setUserLoggedIn(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  const value = {
    userLoggedIn,
    isEmailUser,
    currentUser,
    logout // Add logout function to the context value
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
