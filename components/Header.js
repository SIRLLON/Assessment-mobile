import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { CoresClaras, CoresEscuras } from '../theme';

export default function Header({ title }) {
  const { theme } = useContext(UserContext);
  const isDarkMode = theme === 'dark';
  const Cores = isDarkMode ? CoresEscuras : CoresClaras;
  
  const styles = getStyles(Cores);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const getStyles = (Cores) => StyleSheet.create({
  container: { 
    padding: 15, 
    backgroundColor: Cores.primaria 
  },
  title: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

