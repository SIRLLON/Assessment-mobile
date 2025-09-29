import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import RootNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}