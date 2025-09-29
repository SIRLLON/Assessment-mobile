import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserContext, UserProvider } from './contexts/UserContext';
import Ionicons from '@expo/vector-icons/Ionicons';

import { TemaNavegacaoClaro, TemaNavegacaoEscuro } from './theme';

import HomeScreen from './screens/HomeScreen';
import PerfilScreen from './screens/PerfilScreen';
import QualificacoesScreen from './screens/QualificacoesScreen';
import ProjetosScreen from './screens/ProjetosScreen';
import DetalhesProjetoScreen from './screens/DetalhesProjetoScreen';
import CandidaturasScreen from './screens/CandidaturasScreen';
import DetalhesCandidaturaScreen from './screens/DetalhesCandidaturaScreen';
import ArtigosScreen from './screens/ArtigosScreen';
import DetalhesArtigoScreen from './screens/DetalhesArtigoScreen';
import ConfiguracoesScreen from './screens/ConfiguracoesScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ArtigosStack = createNativeStackNavigator();
const CandidaturasStack = createNativeStackNavigator();
const ProjetosStack = createNativeStackNavigator();

function ProjetosNavigator() {
  return (
    <ProjetosStack.Navigator>
      <ProjetosStack.Screen name="ListaProjetos" component={ProjetosScreen} options={{ headerShown: false }} />
      <ProjetosStack.Screen name="DetalhesProjeto" component={DetalhesProjetoScreen} options={{ title: 'Detalhes do Projeto' }} />
    </ProjetosStack.Navigator>
  );
}

function CandidaturasNavigator() {
  return (
    <CandidaturasStack.Navigator>
      <CandidaturasStack.Screen name="ListaCandidaturas" component={CandidaturasScreen} options={{ headerShown: false }} />
      <CandidaturasStack.Screen name="DetalhesCandidatura" component={DetalhesCandidaturaScreen} options={{ title: 'Detalhes da Vaga' }} />
    </CandidaturasStack.Navigator>
  );
}

function ArtigosNavigator() {
  return (
    <ArtigosStack.Navigator>
      <ArtigosStack.Screen name="ListaArtigos" component={ArtigosScreen} options={{ headerShown: false }} />
      <ArtigosStack.Screen name="DetalhesArtigo" component={DetalhesArtigoScreen} options={{ title: 'Leitor de Artigo' }} />
    </ArtigosStack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Qualificações') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Projetos') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'Candidaturas') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Artigos') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Configurações') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Qualificações" component={QualificacoesScreen} />
      <Tab.Screen name="Projetos" component={ProjetosNavigator} options={{ headerShown: false }}/>
      <Tab.Screen name="Candidaturas" component={CandidaturasNavigator} options={{ headerShown: false }}/>
      <Tab.Screen name="Artigos" component={ArtigosNavigator} options={{ headerShown: false }}/>
      <Tab.Screen name="Configurações" component={ConfiguracoesScreen} />
    </Tab.Navigator>
  );
}

function AppContent() {
  const { theme } = useContext(UserContext);
  const navigationTheme = theme === 'dark' ? TemaNavegacaoEscuro : TemaNavegacaoClaro;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

