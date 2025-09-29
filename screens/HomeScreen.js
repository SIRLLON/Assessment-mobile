import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { CATEGORIAS } from '../utils/mockData';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';

export default function HomeScreen({ navigation }) {
  const { theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
    },
    categoryList: {
      padding: 10,
    },
    categoryCard: {
      alignItems: 'center',
      padding: 15,
      margin: 5,
      borderRadius: 10,
      backgroundColor: currentTheme.card,
    },
    categoryImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 10,
    },
    categoryName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.text,
    },
  });

  const renderCategory = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Products', { categoryId: item.id, categoryName: item.name })}>
      <Card style={styles.categoryCard}>
        <Image source={{ uri: item.image }} style={styles.categoryImage} />
        <Text style={styles.categoryName}>{item.name}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Categorias" />
      <FlatList
        data={CATEGORIAS}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.categoryList}
      />
    </SafeAreaView>
  );
}

