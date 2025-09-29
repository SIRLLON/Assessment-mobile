import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { CoresClaras, CoresEscuras } from '../theme';
import Header from '../components/Header';
import Botao from '../components/Botao';

export default function HomeScreen({ navigation }) {
  const { user, theme } = useContext(UserContext);
  const isDarkMode = theme === 'dark';
  const Cores = isDarkMode ? CoresEscuras : CoresClaras;
  
  const styles = getStyles(Cores);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Meu Perfil" />
      <View style={styles.content}>
        <Image source={user.foto} style={styles.avatar} />
        <Text style={styles.nome}>{user.nome}</Text>
        <Text style={styles.cargo}>
          {user.experienciaAtual.cargo} na {user.experienciaAtual.empresa}
        </Text>
        <Botao
          title="Ver Perfil Completo"
          onPress={() => navigation.navigate('Perfil')}
        />
      </View>
    </SafeAreaView>
  );
}

const getStyles = (Cores) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Cores.fundo,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: Cores.primaria,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Cores.texto,
  },
  cargo: {
    fontSize: 16,
    color: Cores.textoSecundario,
    textAlign: 'center',
    marginVertical: 10,
  },
});

