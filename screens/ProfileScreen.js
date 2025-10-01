import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';
import { DADOS_USUARIO } from '../utils/mockData';

export default function ProfileScreen() {
  const { signOut, theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const user = DADOS_USUARIO; 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    profileImage: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 30,
      borderColor: currentTheme.primary,
      borderWidth: 2,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginTop: 10,
    },
    value: {
      fontSize: 16,
      color: currentTheme.textSecondary,
      marginBottom: 5,
    },
    logoutButtonContainer: {
      marginTop: 'auto',
      width: '100%',
      paddingHorizontal: 20,
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Meu Perfil" />
      <View style={styles.content}>
        <Image source={user?.image} style={styles.profileImage} /> 
        
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