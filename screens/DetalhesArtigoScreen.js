import React from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function DetalhesArtigoScreen({ route }) {
  const { artigo } = route.params;

  const renderLoading = () => (
    <ActivityIndicator
      color="#007BFF"
      size="large"
      style={styles.loading}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: artigo.url }}
        startInLoadingState={true}
        renderLoading={renderLoading}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
