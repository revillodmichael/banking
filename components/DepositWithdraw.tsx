import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { ethers } from 'ethers';

const ×××××××_ADDRESS = "0x9e99408CFe5d39a791032C7460A301c32C071Acd";
const ABI = ["function transfer(address,uint256)"];

export default function DepositWithdraw() {
  const [amount, setAmount] = useState("");

  const deposit = async () => {
    if (!amount || isNaN(Number(amount))) return Alert.alert("Montant invalide");
    Alert.alert(`Dépôt de ${amount} ××××××× en cours...`);
  };

  const withdraw = async () => {
    if (!amount || isNaN(Number(amount))) return Alert.alert("Montant invalide");
    try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(×××××××_ADDRESS, ABI, signer);
      const tx = await contract.transfer("0xYOUR_BANK_ADDRESS", ethers.parseEther(amount));
      await tx.wait();
      Alert.alert(`Retrait de ${amount} ××××××× envoyé !`);
    } catch (error) {
      Alert.alert("Erreur", "Vérifie ton wallet ou le montant");
    }
  };

  return (
    <View style={{ marginVertical: 30, alignItems: 'center' }}>
      <TextInput
        placeholder="Montant"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{
          backgroundColor: '#1f2937',
          color: 'white',
          padding: 15,
          borderRadius: 10,
          width: '80%',
          marginBottom: 15,
          fontSize: 18,
        }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
        <Button title="DÉPÔT" onPress={deposit} color="#00ff00" />
        <View style={{ width: 20 }} />
        <Button title="RETRAIT" onPress={withdraw} color="#ff3300" />
      </View>
    </View>
  );
}