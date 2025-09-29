import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, ActivityIndicator, Alert } from 'react-native';
import { getData, saveData } from '../utils/storage';

export default function DetalhesCandidaturaScreen({ route, navigation }) {
  const { candidaturaId } = route.params;
  const [candidatura, setCandidatura] = useState(null);

  useEffect(() => {
    async function carregarDetalhes() {
      const dadosSalvos = await getData('candidaturas');
      const itemAtual = dadosSalvos.find(item => item.id === candidaturaId);
      if (itemAtual) {
        setCandidatura(itemAtual);
      }
    }
    carregarDetalhes();
  }, [candidaturaId]);

  const handleUpdateStatus = async (novoStatus) => {
    const listaCompleta = await getData('candidaturas');
    const listaAtualizada = listaCompleta.map(item =>
      item.id === candidaturaId ? { ...item, status: novoStatus } : item
    );
    await saveData('candidaturas', listaAtualizada);
    setCandidatura(prev => ({ ...prev, status: novoStatus }));
    Alert.alert("Sucesso", "Status da candidatura foi atualizado.");
  };

  if (!candidatura) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.vaga}>{candidatura.vaga}</Text>
        <Text style={styles.empresa}>{candidatura.empresa}</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Data:</Text>
          <Text style={styles.info}>{candidatura.data}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Status Atual:</Text>
          <Text style={styles.info}>{candidatura.status}</Text>
        </View>
        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.descricao}>{candidatura.descricao}</Text>
        
        <View style={styles.actionsContainer}>
          <Button title="Aprovar" onPress={() => handleUpdateStatus('Aprovado')} color="#28a745" />
          <Button title="Rejeitar" onPress={() => handleUpdateStatus('Rejeitado')} color="#dc3545" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA', padding: 16 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 24 },
  vaga: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  empresa: { fontSize: 18, color: '#666', marginBottom: 24, borderBottomWidth: 1, borderBottomColor: '#EEE', paddingBottom: 16 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  label: { fontSize: 16, color: '#333', fontWeight: 'bold', marginTop: 16 },
  info: { fontSize: 16, color: '#555' },
  descricao: { fontSize: 16, color: '#555', lineHeight: 24, marginTop: 8 },
  actionsContainer: {
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

