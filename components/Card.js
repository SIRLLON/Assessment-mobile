import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';

const getStyles = (currentTheme) => StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: currentTheme.card,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: currentTheme.border,
  },
  text: {
    color: currentTheme.text,
  },
});

export default function Card({ children, style }) {
  const { theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  const styles = getStyles(currentTheme);

  return (
    <View style={[styles.container, style]}>
      {typeof children === 'string' ? <Text style={styles.text}>{children}</Text> : children}
    </View>
  );
}

