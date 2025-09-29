
import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import ListaHabilidades from '../components/ListaHabilidades';
import { UserContext } from '../contexts/UserContext';

export default function QualificacoesScreen() {
  const { user } = useContext(UserContext);
 return (
    <View style={styles.container}>
      <Header title="Qualificações" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <ListaHabilidades habilidades={user.skills} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scroll: { padding: 20 },
});
