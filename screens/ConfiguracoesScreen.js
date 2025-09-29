import React, { useState, useContext } from 'react';
import { View, Text, Switch, StyleSheet, TextInput, Button, ScrollView, Alert } from 'react-native';
import Header from '../components/Header';
import { UserContext } from '../contexts/UserContext';

export default function ConfiguracoesScreen() {
  const { user, setUser, theme, toggleTheme } = useContext(UserContext);
  const [formData, setFormData] = useState({
    nome: user.nome,
    email: user.email,
    telefone: user.telefone,
  });

  const handleInputChange = (field, value) => {
    setFormData(currentData => ({
      ...currentData,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    setUser(currentUser => ({
      ...currentUser,
      ...formData,
    }));
    Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
  };

  const isDarkMode = theme === 'dark';

  const containerStyle = [styles.container, isDarkMode && styles.containerDark];
  const textStyle = [styles.text, isDarkMode && styles.textDark];
  const inputStyle = [styles.input, isDarkMode && styles.inputDark];
  const sectionTitleStyle = [styles.sectionTitle, isDarkMode && styles.sectionTitleDark];

  return (
    <ScrollView style={containerStyle}>
      <Header title="Configurações" />
      <View style={styles.content}>
        <Text style={sectionTitleStyle}>Preferências de Tema</Text>
        <View style={[styles.optionContainer, isDarkMode && styles.optionContainerDark]}>
          <Text style={textStyle}>Modo Escuro</Text>
          <Switch 
            value={isDarkMode} 
            onValueChange={toggleTheme} 
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>

        <Text style={sectionTitleStyle}>Editar Perfil</Text>
        <View style={[styles.formContainer, isDarkMode && styles.formContainerDark]}>
          <Text style={textStyle}>Nome</Text>
          <TextInput
            style={inputStyle}
            value={formData.nome}
            onChangeText={(text) => handleInputChange('nome', text)}
            placeholderTextColor={isDarkMode ? '#999' : '#ccc'}
          />

          <Text style={textStyle}>E-mail</Text>
          <TextInput
            style={inputStyle}
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            keyboardType="email-address"
            placeholderTextColor={isDarkMode ? '#999' : '#ccc'}
          />

          <Text style={textStyle}>Telefone</Text>
          <TextInput
            style={inputStyle}
            value={formData.telefone}
            onChangeText={(text) => handleInputChange('telefone', text)}
            keyboardType="phone-pad"
            placeholderTextColor={isDarkMode ? '#999' : '#ccc'}
          />

          <View style={styles.buttonContainer}>
            <Button title="Salvar Alterações" onPress={handleSaveChanges} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
    color: '#333',
  },
  sectionTitleDark: {
    color: '#FFFFFF',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  optionContainerDark: {
    backgroundColor: '#2C2C2C',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
  },
  formContainerDark: {
    backgroundColor: '#2C2C2C',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  textDark: {
    color: '#FFFFFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    color: '#333',
  },
  inputDark: {
    borderColor: '#555',
    backgroundColor: '#444',
    color: '#FFFFFF',
  },
  buttonContainer: {
    marginTop: 20,
  }
});
