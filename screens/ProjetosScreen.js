import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import { UserContext } from '../contexts/UserContext';
import { buscarProjetosDoUsuario } from '../utils/githubService';

export default function ProjetosScreen({ navigation }) {
  const { user } = useContext(UserContext);
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarProjetos() {
      const githubUrl = user.links.github;
      const username = githubUrl.substring(githubUrl.lastIndexOf('/') + 1);
      
      if (username) {
        const dados = await buscarProjetosDoUsuario(username);
        setProjetos(dados);
      }
      setLoading(false);
    }
    carregarProjetos();
  }, [user]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Buscando projetos...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetalhesProjeto', { projeto: item })}
    >
      <Text style={styles.nomeProjeto}>{item.name}</Text>
      <Text style={styles.descricaoProjeto} numberOfLines={2}>
        {item.description || 'Sem descrição.'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Projetos do GitHub" />
      <FlatList
        data={projetos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.centered}>Nenhum projeto encontrado.</Text>}
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
  nomeProjeto: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  descricaoProjeto: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  }
});

