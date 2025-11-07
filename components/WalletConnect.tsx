import React from 'react';
import { Button, Alert } from 'react-native';
import { ethers } from 'ethers';

const ×××××××_ADDRESS = "0x9e99408CFe5d39a791032C7460A301c32C071Acd";

export default function WalletConnect() {
  const connect = async () => {
    if (!(window as any).ethereum) {
      return Alert.alert("MetaMask ou WalletConnect requis");
    }

    try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      Alert.alert(`Connecté : ${address.slice(0,6)}...${address.slice(-4)}`);
    } catch (error) {
      Alert.alert("Connexion échouée", "Vérifie ton wallet");
    }
  };

  return (
    <Button
      title="CONNECTER WALLET"
      onPress={connect}
      color="#ff3300"
    />
  );
}