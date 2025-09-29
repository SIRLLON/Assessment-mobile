import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const CoresClaras = {
  primaria: '#007BFF',
  fundo: '#F7F8FA',
  card: '#FFFFFF',
  texto: '#121212',
  borda: '#E0E0E0',
  textoSecundario: '#666',
};

export const CoresEscuras = {
  primaria: '#409CFF',
  fundo: '#121212',
  card: '#1E1E1E',
  texto: '#FFFFFF',
  borda: '#2C2C2C',
  textoSecundario: '#A9A9A9',
};

export const TemaNavegacaoClaro = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: CoresClaras.primaria,
    background: CoresClaras.fundo,
    card: CoresClaras.card,
    text: CoresClaras.texto,
    border: CoresClaras.borda,
  },
};

export const TemaNavegacaoEscuro = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: CoresEscuras.primaria,
    background: CoresEscuras.fundo,
    card: CoresEscuras.card,
    text: CoresEscuras.texto,
    border: CoresEscuras.borda,
  },
};
