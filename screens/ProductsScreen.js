import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import { PRODUTOS } from '../utils/mockData';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';

export default function ProductsScreen({ route, navigation }) {
  const { categoryId, categoryName } = route.params;
  const { theme, cart, addToCart } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const filteredProducts = PRODUTOS.filter(product => product.categoryId === categoryId);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
    },
    productList: {
      padding: 10,
    },
    productCard: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: currentTheme.card,
    },
    productImage: {
      width: 70,
      height: 70,
      borderRadius: 8,
      marginRight: 15,
    },
    productInfo: {
      flex: 1,
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: currentTheme.text,
    },
    productDescription: {
      fontSize: 14,
      color: currentTheme.textSecondary,
      marginBottom: 5,
    },
    productPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.primary,
    },
    cartSummaryContainer: {
      padding: 15,
      borderTopWidth: 1,
      borderColor: currentTheme.border,
      backgroundColor: currentTheme.card,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cartSummaryText: {
      fontSize: 16,
      color: currentTheme.text,
    },
  });

  const renderProduct = ({ item }) => (
    <Card style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription} numberOfLines={2}>{item.description}</Text>
        <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
      </View>
      <Button title="Adicionar" onPress={() => addToCart(item)} />
    </Card>
  );

  const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={categoryName} />
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productList}
      />
      {totalItemsInCart > 0 && (
        <View style={styles.cartSummaryContainer}>
          <Text style={styles.cartSummaryText}>Itens no carrinho: {totalItemsInCart}</Text>
          <Button title="Ver Carrinho" onPress={() => navigation.navigate('Cart')} />
        </View>
      )}
    </SafeAreaView>
  );
}