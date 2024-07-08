import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [employeeId, setEmployeeId] = useState('');

  useEffect(() => {
    // Simulating fetching the logged-in employee ID, e.g., from localStorage or an API
    const loggedInEmployeeId = localStorage.getItem('employeeId') || '12345'; // Example ID
    setEmployeeId(loggedInEmployeeId);
  }, []);

  return (
    <AuthContext.Provider value={{ employeeId }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
