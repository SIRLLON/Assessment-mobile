import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';
import { schedulePushNotification } from '../utils/notifications';

export default function CheckoutScreen({ navigation }) {
  const { user, theme, clearCart } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const [address, setAddress] = useState(user?.address || '');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!address) newErrors.address = 'O endereço de entrega é obrigatório.';
    if (!paymentMethod) newErrors.paymentMethod = 'O método de pagamento é obrigatório.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmOrder = () => {
    if (validateForm()) {
      Alert.alert(
        'Pedido Confirmado!',
        'Seu pedido foi realizado com sucesso e será entregue em breve!',
        [{ text: 'OK', onPress: () => {
          schedulePushNotification("InfnetFood", "Seu pedido foi confirmado!");
          clearCart();
          // CORREÇÃO APLICADA AQUI
          navigation.popToTop(); 
        } }]
      );
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
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
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginBottom: 8,
      marginTop: 15,
    },
    input: {
      width: '100%',
      padding: 12,
      borderWidth: 1,
      borderColor: currentTheme.border,
      borderRadius: 8,
      fontSize: 16,
      color: currentTheme.text,
      backgroundColor: currentTheme.card,
    },
    errorText: {
      color: currentTheme.error,
      fontSize: 12,
      marginTop: 5,
    },
    buttonContainer: {
      marginTop: 30,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Finalizar Pedido" />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Detalhes da Entrega e Pagamento</Text>

        <Text style={styles.label}>Endereço de Entrega</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Rua A, 123, Bairro X"
          placeholderTextColor={currentTheme.textSecondary}
          value={address}
          onChangeText={setAddress}
        />
        {errors.address ? <Text style={styles.errorText}>{errors.address}</Text> : null}

        <Text style={styles.label}>Método de Pagamento</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Cartão de Crédito, PIX, Dinheiro"
          placeholderTextColor={currentTheme.textSecondary}
          value={paymentMethod}
          onChangeText={setPaymentMethod}
        />
        {errors.paymentMethod ? <Text style={styles.errorText}>{errors.paymentMethod}</Text> : null}

        <View style={styles.buttonContainer}>
          <Button title="Confirmar Pedido" onPress={handleConfirmOrder} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

