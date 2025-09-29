import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { CoresClaras, CoresEscuras } from '../theme';

export default function Botao({ title, onPress }) {
  const { theme } = useContext(UserContext);
  const isDarkMode = theme === 'dark';
  const Cores = isDarkMode ? CoresEscuras : CoresClaras;

  const styles = getStyles(Cores);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const getStyles = (Cores) => StyleSheet.create({
  button: { 
    backgroundColor: Cores.primaria, 
    padding: 12, 
    borderRadius: 8, 
    alignItems: 'center',
    marginVertical: 10,
  },
  text: { 
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 16,
  }
});

