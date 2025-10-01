import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';

import { TextInput, Button as PaperButton, useTheme } from 'react-native-paper';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, theme: appTheme } = useContext(AuthContext);
  
  const paperTheme = useTheme(); 
  const currentTheme = appTheme === 'dark' ? darkTheme : lightTheme;

  const handleLogin = () => {
    setError('');
    if (!email || !password) {
      setError('E-mail e senha são obrigatórios.');
      return;
    }

    const success = signIn(email, password); 

    if (!success) {
      setError('E-mail ou senha inválidos.');
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      width: 120,
      height: 120,
      marginBottom: 30,
      borderRadius: 60,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: currentTheme.primary,
      marginBottom: 30,
    },
    input: {
      width: '100%',
      marginBottom: 20,
      backgroundColor: paperTheme.colors.surface,
    },
    errorText: {
      color: paperTheme.colors.error,
      marginBottom: 15,
      fontSize: 14,
      textAlign: 'center',
    },
    hintText: {
      color: currentTheme.textSecondary,
      marginBottom: 20,
      fontSize: 13,
      textAlign: 'center',
    },
    button: {
      width: '100%',
      marginTop: 10,
      paddingVertical: 8,
      borderRadius: 10,
    },
    buttonContent: {
      height: 50,
    }
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <Image source={require('../assets/images/infnetfood.png')} style={styles.logo} />
        <Text style={styles.title}>InfnetFood</Text>

        <TextInput
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
          left={<TextInput.Icon icon="email" />}
        />
        <TextInput
          label="Senha"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          mode="outlined"
          secureTextEntry
          left={<TextInput.Icon icon="lock" />}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <PaperButton 
          mode="contained"
          onPress={handleLogin} 
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={{ fontSize: 18 }}
          color={currentTheme.primary}
        >
          Entrar
        </PaperButton>

        <Text style={styles.hintText}>
          Para testar, use: sirllonat@infnet.com / 1234
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}