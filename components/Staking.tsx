import React from 'react';
import { View, Button, Alert } from 'react-native';

export default function Staking() {
  const stake = () => {
    Alert.alert("××××××× Staking", "10% APY activé ! Ton argent travaille pour toi.");
  };

  return (
    <View style={{ marginVertical: 30, alignItems: 'center' }}>
      <Button
        title="STAKER ×××××××"
        onPress={stake}
        color="#6366f1"
      />
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: '#0ff', fontSize: 16 }}>
          +10 % APY – Revenu passif
        </Text>
      </View>
    </View>
  );
}