import React, { useContext } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Linking } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import Card from '../components/Card';
import ListaHabilidades from '../components/ListaHabilidades';

export default function PerfilScreen() {
  const { user } = useContext(UserContext);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Card>
        <View style={styles.dadosPessoais}>
          <Image source={user.foto} style={styles.foto} />
          <Text style={styles.nome}>{user.nome}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Telefone: {user.telefone}</Text>
          <Text>LinkedIn: {user.linkedin}</Text>
          <Text>Cidade / País: {user.cidade}</Text>
        </View>
      </Card>

      <Card titulo="Experiência Profissional">
        <View style={styles.cardContent}>
          <Text style={styles.subtitulo}>Cargo Atual</Text>
          <Text>{user.experienciaAtual.cargo} - {user.experienciaAtual.empresa}</Text>

          {user.experienciasPassadas && (
            <>
              <Text style={styles.subtitulo}>Experiências Passadas</Text>
              {user.experienciasPassadas.map((exp, index) => (
                <Text key={index}>• {exp.cargo} - {exp.empresa} ({exp.periodo})</Text>
              ))}
            </>
          )}

          <Text style={styles.subtitulo}>Projetos Principais</Text>
          {user.projetosPrincipais.map((proj, index) => (
            <Text key={index}>• {proj}</Text>
          ))}
        </View>
      </Card>

      <Card titulo="Educação">
        <View style={styles.cardContent}>
          {user.educacao.map((edu, index) => (
            <Text key={index}>• {edu.formacao} - {edu.certificacao}</Text>
          ))}
        </View>
      </Card>

      <Card titulo="Habilidades">
        <View style={styles.cardContent}>
          <ListaHabilidades habilidades={user.skills} />
        </View>
      </Card>

      <Card titulo="Links Externos">
        <View style={styles.cardContent}>
          <Text style={styles.link} onPress={() => Linking.openURL(user.links.github)}>GitHub</Text>
          <Text style={styles.link} onPress={() => Linking.openURL(user.links.devto)}>Dev.to</Text>
          {user.links.portfolio && (
            <Text style={styles.link} onPress={() => Linking.openURL(user.links.portfolio)}>Portfólio</Text>
          )}
          <Text style={styles.link} onPress={() => Linking.openURL(user.linkedin)}>LinkedIn</Text>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 30,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardContent: {
    paddingVertical: 5,
  },
  subtitulo: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 2,
  },
  dadosPessoais: {
    alignItems: 'center',
    textAlign: 'center'
  },
});
