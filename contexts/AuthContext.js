import React, { createContext, useState } from 'react';
import { DADOS_USUARIO } from '../utils/mockData';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [cart, setCart] = useState([]);

  const signIn = (email, password) => {
    if (email.toLowerCase() === 'sirllonat@infnet.com' && password === '1234') {
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

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, amount) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };
  
  const removeFromCart = (productId) => {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, theme, toggleTheme, cart, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </AuthContext.Provider>
  );
};