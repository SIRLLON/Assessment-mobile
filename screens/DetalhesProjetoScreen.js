import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, Linking } from 'react-native';

export default function DetalhesProjetoScreen({ route }) {
  const { projeto } = route.params;

  const abrirLink = () => {
    if (projeto.html_url) {
      Linking.openURL(projeto.html_url);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.nome}>{projeto.name}</Text>
        
        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.descricao}>{projeto.description || 'Nenhuma descrição fornecida.'}</Text>
        
        {projeto.language && (
          <>
            <Text style={styles.label}>Linguagem Principal:</Text>
            <View style={styles.techBadge}>
              <Text style={styles.techText}>{projeto.language}</Text>
            </View>
          </>
        )}

        <View style={styles.statsContainer}>
          <Text style={styles.statText}>⭐ {projeto.stargazers_count} Estrelas</Text>
          <Text style={styles.statText}>👁️ {projeto.watchers_count} Observadores</Text>
        </View>

        {projeto.html_url && (
          <View style={styles.buttonContainer}>
            <Button title="Ver no GitHub" onPress={abrirLink} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F7F8FA', 
    padding: 16 
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
    marginBottom: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  statText: {
    fontSize: 14,
    color: '#555',
  },
  techBadge: {
    backgroundColor: '#E0EFFF',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  techText: {
    color: '#007BFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 16,
  }
});

