import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import Header from '../components/Header';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';
import Button from '../components/Button';

const getStyles = (currentTheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: currentTheme.background,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderColor: currentTheme.primary,
    borderWidth: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: currentTheme.text,
    marginTop: 15,
  },
  value: {
    fontSize: 16,
    color: currentTheme.textSecondary,
    marginBottom: 5,
  },
  logoutButtonContainer: {
    marginTop: 30,
    width: '80%',
  },
});

export default function ProfileScreen({ navigation }) {
  const { user, signOut, theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  const styles = getStyles(currentTheme);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Meu Perfil" />
      <View style={styles.content}>
        <Image source={{ uri: 'https://placehold.co/120x120/FF5733/white?text=User' }} style={styles.profileImage} />
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{user?.name}</Text>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.value}>{user?.email}</Text>
        <Text style={styles.label}>Telefone:</Text>
        <Text style={styles.value}>{user?.phone}</Text>
        <Text style={styles.label}>Endereço:</Text>
        <Text style={styles.value}>{user?.address}</Text>
        <View style={styles.logoutButtonContainer}>
          <Button title="Sair" onPress={signOut} color={currentTheme.error} />
        </View>
      </View>
    </SafeAreaView>
  );
}

