import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { CoresClaras, CoresEscuras } from '../theme';

export default function Card({ children, style }) {
  const { theme } = useContext(UserContext);
  const isDarkMode = theme === 'dark';
  const Cores = isDarkMode ? CoresEscuras : CoresClaras;
  
  const styles = getStyles(Cores);

  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
}

const getStyles = (Cores) => StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: Cores.card,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: Cores.borda,
  },
});

