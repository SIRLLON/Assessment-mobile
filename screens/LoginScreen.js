import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Alert } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';
import Button from '../components/Button';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const handleLogin = () => {
    if (!email || !password) {
      setError('E-mail e senha são obrigatórios.');
      return;
    }

    if (signIn(email, password)) {
      setError('');
    } else {
      setError('Login inválido.');
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: currentTheme.background,
      padding: 20,
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 40,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginBottom: 30,
    },
    input: {
      width: '100%',
      padding: 15,
      borderWidth: 1,
      borderColor: currentTheme.border,
      borderRadius: 10,
      marginBottom: 15,
      fontSize: 16,
      color: currentTheme.text,
      backgroundColor: currentTheme.card,
    },
    errorText: {
      color: currentTheme.error,
      marginBottom: 15,
      fontSize: 14,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://placehold.co/150x150/FF5733/white?text=InfnetFood' }} style={styles.logo} />
      <Text style={styles.title}>InfnetFood</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor={currentTheme.textSecondary}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={currentTheme.textSecondary}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
