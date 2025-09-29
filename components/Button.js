import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';

export default function Button({ title, onPress, color }) {
  const { theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const buttonBackgroundColor = color || currentTheme.primary;

  const styles = StyleSheet.create({
    button: {
      backgroundColor: buttonBackgroundColor,
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 10,
    },
    text: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
