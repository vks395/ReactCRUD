import React, { createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
const userRole="admin";
  return (
    <AuthContext.Provider value={{ userRole }}>
      {children}
    </AuthContext.Provider>
  );
};
