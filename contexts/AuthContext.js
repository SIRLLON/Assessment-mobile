import React, { createContext, useState } from 'react';
import { DADOS_USUARIO } from '../utils/mockData';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  const signIn = (email, password) => {
    if (email && password) {
      setUser(DADOS_USUARIO);
      return true;
    }
    return false;
  };

  const signOut = () => {
    setUser(null);
  };

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, theme, toggleTheme }}>
      {children}
    </AuthContext.Provider>
  );
};
