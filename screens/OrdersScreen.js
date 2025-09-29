import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { DADOS_PEDIDOS } from '../utils/mockData';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';

export default function OrdersScreen() {
  const { theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
    },
    orderList: {
      padding: 10,
    },
    orderCard: {
      marginBottom: 10,
      borderColor: currentTheme.border,
      borderWidth: 1,
    },
    orderHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    orderId: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.text,
    },
    orderStatus: {
      fontSize: 14,
      fontWeight: 'bold',
      color: currentTheme.primary,
    },
    orderDate: {
      fontSize: 12,
      color: currentTheme.textSecondary,
      marginBottom: 10,
    },
    itemsTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginTop: 10,
    },
    itemText: {
      fontSize: 12,
      color: currentTheme.textSecondary,
    },
    orderTotal: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'right',
      marginTop: 10,
    },
  });

  const renderOrder = ({ item }) => (
    <Card style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderId}>Pedido #{item.id}</Text>
        <Text style={styles.orderStatus}>{item.status}</Text>
      </View>
      <Text style={styles.orderDate}>{item.date}</Text>
      <Text style={styles.itemsTitle}>Itens:</Text>
      {item.items.map((foodItem, index) => (
        <Text key={index} style={styles.itemText}>
          {foodItem.qty}x {foodItem.name}
        </Text>
      ))}
      <Text style={styles.orderTotal}>Total: R$ {item.total.toFixed(2)}</Text>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Meus Pedidos" />
      <FlatList
        data={DADOS_PEDIDOS}
        renderItem={renderOrder}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.orderList}
        ListEmptyComponent={<Text style={{ color: currentTheme.text, textAlign: 'center', marginTop: 20 }}>Nenhum pedido encontrado.</Text>}
      />
    </SafeAreaView>
  );
}
