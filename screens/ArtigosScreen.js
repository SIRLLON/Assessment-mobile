import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import { UserContext } from '../contexts/UserContext';
import { buscarArtigosDoUsuario } from '../utils/devtoService';

export default function ArtigosScreen({ navigation }) {
  const { user } = useContext(UserContext);
  const [artigos, setArtigos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarArtigos() {
      const devtoUsername = user.links.devto.substring(user.links.devto.lastIndexOf('/') + 1);
      
      if (devtoUsername) {
        const dados = await buscarArtigosDoUsuario(devtoUsername);
        setArtigos(dados);
      }
      setLoading(false);
    }
    carregarArtigos();
  }, [user]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Buscando artigos...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetalhesArtigo', { artigo: item })}
    >
      <Text style={styles.titulo}>{item.title}</Text>
      <Text style={styles.resumo} numberOfLines={2}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Artigos do Dev.to" />
      <FlatList
        data={artigos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.centered}>Nenhum artigo encontrado.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F7F8FA' 
  },
  list: { 
    padding: 16 
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titulo: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  resumo: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  }
});

