import React, { useContext, useState } from 'react';
import { View, Text, Switch, StyleSheet, TextInput, Alert, ScrollView, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';

export default function SettingsScreen() {
  const { user, theme, toggleTheme, setUser } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({ ...prevData, [field]: value }));
  };

  const handleSaveChanges = () => {
    if (user) {
      setUser(prevUser => ({
        ...prevUser,
        ...formData,
      }));
      Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
    },
    content: {
      padding: 20,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 15,
      marginTop: 10,
      color: currentTheme.text,
    },
    optionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      backgroundColor: currentTheme.card,
      borderRadius: 8,
      paddingHorizontal: 15,
      marginBottom: 20,
      borderColor: currentTheme.border,
      borderWidth: 1,
    },
    text: {
      fontSize: 18,
      color: currentTheme.text,
    },
    formContainer: {
      backgroundColor: currentTheme.card,
      borderRadius: 8,
      padding: 20,
      borderColor: currentTheme.border,
      borderWidth: 1,
    },
    input: {
      borderWidth: 1,
      borderColor: currentTheme.border,
      borderRadius: 5,
      padding: 10,
      fontSize: 16,
      marginBottom: 15,
      marginTop: 5,
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Configurações" />
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Preferências de Tema</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.text}>Modo Escuro</Text>
          <Switch
            value={theme === 'dark'}
            onValueChange={toggleTheme}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={theme === 'dark' ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>

        <Text style={styles.sectionTitle}>Editar Perfil</Text>
        <View style={styles.formContainer}>
          <Text style={styles.text}>Nome</Text>
          <TextInput
            style={styles.input}
            value={formData.name}
            onChangeText={(text) => handleInputChange('name', text)}
            placeholderTextColor={currentTheme.textSecondary}
          />

          <Text style={styles.text}>E-mail</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            keyboardType="email-address"
            placeholderTextColor={currentTheme.textSecondary}
          />

          <Text style={styles.text}>Telefone</Text>
          <TextInput
            style={styles.input}
            value={formData.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
            keyboardType="phone-pad"
            placeholderTextColor={currentTheme.textSecondary}
          />
           <Text style={styles.text}>Endereço</Text>
          <TextInput
            style={styles.input}
            value={formData.address}
            onChangeText={(text) => handleInputChange('address', text)}
            placeholderTextColor={currentTheme.textSecondary}
          />

          <Button title="Salvar Alterações" onPress={handleSaveChanges} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
