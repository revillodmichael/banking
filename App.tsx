import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WalletConnect from './components/WalletConnect';
import Balance from './components/Balance';
import DepositWithdraw from './components/DepositWithdraw';
import Staking from './components/Staking';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>××××××× Banking</Text>
      <WalletConnect />
      <Balance />
      <DepositWithdraw />
      <Staking />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    color: '#0ff',
    textAlign: 'center',
    marginVertical: 30,
    fontWeight: 'bold',
    textShadowColor: '#0ff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
});