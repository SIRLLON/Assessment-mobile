import React, { useState, useContext, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';

export default function CartScreen({ route, navigation }) {
  const { cartItems: initialCartItems } = route.params;
  const [cartItems, setCartItems] = useState(initialCartItems);
  const { theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    if (route.params?.cartItems) {
      setCartItems(route.params.cartItems);
    }
  }, [route.params?.cartItems]);

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const handleIncreaseQuantity = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (itemId) => {
    Alert.alert(
      "Remover Item",
      "Tem certeza que deseja remover este item do carrinho?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Remover", onPress: () => setCartItems(prevItems => prevItems.filter(item => item.id !== itemId)) }
      ]
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
    },
    cartList: {
      padding: 10,
    },
    cartItemCard: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      marginBottom: 10,
      backgroundColor: currentTheme.card,
      borderColor: currentTheme.border,
      borderWidth: 1,
    },
    itemImage: {
      width: 50,
      height: 50,
      borderRadius: 5,
      marginRight: 10,
    },
    itemInfo: {
      flex: 1,
    },
    itemName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.text,
    },
    itemPrice: {
      fontSize: 14,
      color: currentTheme.textSecondary,
    },
    quantityControl: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
    },
    quantityButton: {
      backgroundColor: currentTheme.primary,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    quantityButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    quantityText: {
      fontSize: 16,
      color: currentTheme.text,
    },
    removeButton: {
      backgroundColor: currentTheme.error,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      marginLeft: 10,
    },
    removeButtonText: {
      color: '#fff',
    },
    totalContainer: {
      padding: 20,
      borderTopWidth: 1,
      borderColor: currentTheme.border,
      backgroundColor: currentTheme.card,
    },
    totalText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'right',
      marginBottom: 15,
    },
  });

  const renderCartItem = ({ item }) => (
    <Card style={styles.cartItemCard}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.quantityControl}>
        <TouchableOpacity style={styles.quantityButton} onPress={() => handleDecreaseQuantity(item.id)}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={() => handleIncreaseQuantity(item.id)}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveItem(item.id)}>
          <Text style={styles.removeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Meu Carrinho" />
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.cartList}
        ListEmptyComponent={<Text style={{ color: currentTheme.text, textAlign: 'center', marginTop: 20 }}>Seu carrinho está vazio.</Text>}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R$ {calculateTotal().toFixed(2)}</Text>
        {cartItems.length > 0 && (
          <Button title="Finalizar Pedido" onPress={() => navigation.navigate('Checkout')} />
        )}
      </View>
    </SafeAreaView>
  );
}
