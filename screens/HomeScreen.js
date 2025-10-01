import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { CATEGORIAS } from '../utils/mockData';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';

const getStyles = (currentTheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: currentTheme.background,
  },
  categoryList: {
    padding: 10,
  },
  categoryCard: {
    flex: 1,
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
    textAlign: 'center',
  },
});

export default function HomeScreen({ navigation }) {
  const { theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  const styles = getStyles(currentTheme);

  const renderCategory = ({ item }) => (
    <TouchableOpacity 
      style={{flex: 1/2, margin: 5}} 
      onPress={() => navigation.navigate('Products', { categoryId: item.id, categoryName: item.name })}
    >
      <Card style={styles.categoryCard}>
        <Image source={item.image} style={styles.categoryImage} />
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

