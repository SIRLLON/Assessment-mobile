import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';

export default function RestaurantDetailScreen({ route }) {
  const { restaurant } = route.params;
  const { theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
    },
    content: {
      padding: 20,
    },
    restaurantImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 20,
      resizeMode: 'cover',
    },
    restaurantName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginBottom: 10,
    },
    restaurantAddress: {
      fontSize: 16,
      color: currentTheme.textSecondary,
      marginBottom: 15,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginTop: 20,
      marginBottom: 10,
    },
    menuItem: {
      fontSize: 16,
      color: currentTheme.textSecondary,
      marginBottom: 5,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Detalhes do Restaurante" />
      <ScrollView>
        <View style={styles.content}>
          <Image source={{ uri: 'https://placehold.co/400x200/FF5733/white?text=Restaurante' }} style={styles.restaurantImage} />
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantAddress}>{restaurant.address}</Text>
          <Text style={styles.restaurantAddress}>Avaliação: {restaurant.rating} ⭐</Text>

          <Text style={styles.sectionTitle}>Exemplo do Cardápio:</Text>
          <Card>
            <Text style={styles.menuItem}>{restaurant.menuSample}</Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
