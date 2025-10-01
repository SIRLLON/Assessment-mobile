import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { RESTAURANTES } from '../utils/mockData';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';

export default function MapScreen({ navigation }) {
  const { theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
    },
    mapImage: {
      width: '100%',
      height: 250,
      resizeMode: 'cover',
      marginBottom: 20,
    },
    restaurantsContainer: {
      paddingHorizontal: 20,
    },
    restaurantTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginBottom: 15,
    },
    restaurantCard: {
      marginBottom: 15,
      borderColor: currentTheme.border,
      borderWidth: 1,
    },
    restaurantName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: currentTheme.text,
    },
    restaurantAddress: {
      fontSize: 14,
      color: currentTheme.textSecondary,
      marginTop: 5,
    },
    restaurantRating: {
      fontSize: 14,
      color: currentTheme.textSecondary,
      marginTop: 5,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Restaurantes Próximos" />
      <ScrollView>
        <Image
          source={require('../assets/images/mapa_centro_rj_amplo.png')} 
          style={styles.mapImage}
        />
        <View style={styles.restaurantsContainer}>
          <Text style={styles.restaurantTitle}>Restaurantes no Centro do Rio</Text>
          {RESTAURANTES.map(restaurant => (
            <TouchableOpacity key={restaurant.id} onPress={() => navigation.navigate('RestaurantDetail', { restaurant: restaurant })}>
              <Card style={styles.restaurantCard}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <Text style={styles.restaurantAddress}>{restaurant.address}</Text>
                <Text style={styles.restaurantRating}>Avaliação: {restaurant.rating} ⭐</Text>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
