import React, { createContext, useState } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signIn = (email, password) => {
    // call firebase function
    return new Promise((resolve) => {
      resolve({
        user: { email: "a@a.com" },
      });
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
