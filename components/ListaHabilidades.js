
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function ListaHabilidades({ habilidades }) {
  return (
   <View style={styles.container}>
      {habilidades.map((skill, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.text}>• {skill}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
  },
  card: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 5,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
});
