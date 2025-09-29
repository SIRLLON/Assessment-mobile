import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Header from '../components/Header';
import { getData, saveData } from '../utils/storage';

const DADOS_INICIAIS = [
  { id: '1', vaga: 'Desenvolvedor React Native Sênior', empresa: 'Tech Solutions Inc.', status: 'Aprovado' },
  { id: '2', vaga: 'Engenheiro de Software Front-end', empresa: 'Inova Web', status: 'Em análise' },
  { id: '3', vaga: 'Desenvolvedor Full Stack Pleno', empresa: 'Data Systems', status: 'Entrevista agendada' },
];

const StatusBadge = ({ status }) => {
  const getStatusStyle = () => {
    switch (status) {
      case 'Aprovado': return styles.statusAprovado;
      case 'Rejeitado': return styles.statusRejeitado;
      case 'Entrevista agendada': return styles.statusEntrevista;
      default: return styles.statusEmAnalise;
    }
  };
  return (
    <View style={[styles.statusBadge, getStatusStyle()]}>
      <Text style={styles.statusText}>{status}</Text>
    </View>
  );
};

export default function CandidaturasScreen({ navigation }) {
  const [candidaturas, setCandidaturas] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function carregarCandidaturas() {
      setLoading(true);
      let dadosSalvos = await getData('candidaturas');
      if (!dadosSalvos) {
        await saveData('candidaturas', DADOS_INICIAIS);
        dadosSalvos = DADOS_INICIAIS;
      }
      setCandidaturas(dadosSalvos);
      setLoading(false);
    }
    
    if (isFocused) {
      carregarCandidaturas();
    }
  }, [isFocused]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetalhesCandidatura', { candidaturaId: item.id })}
    >
      <View style={styles.textContainer}>
        <Text style={styles.vaga}>{item.vaga}</Text>
        <Text style={styles.empresa}>{item.empresa}</Text>
      </View>
      <StatusBadge status={item.status} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Candidaturas" />
      <FlatList
        data={candidaturas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.centered}>Nenhuma candidatura encontrada.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  list: { padding: 16 },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textContainer: { flex: 1, marginRight: 10 },
  vaga: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  empresa: { fontSize: 14, color: '#666', marginTop: 4 },
  statusBadge: { paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12 },
  statusText: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' },
  statusAprovado: { backgroundColor: '#28a745' },
  statusRejeitado: { backgroundColor: '#dc3545' },
  statusEmAnalise: { backgroundColor: '#ffc107' },
  statusEntrevista: { backgroundColor: '#17a2b8' },
});

