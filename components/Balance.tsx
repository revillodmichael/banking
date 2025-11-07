import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ethers } from 'ethers';

const ×××××××_ADDRESS = "0x9e99408CFe5d39a791032C7460A301c32C071Acd";
const ABI = ["function balanceOf(address) view returns (uint256)"];

export default function Balance() {
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    const check = async () => {
      if ((window as any).ethereum) {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const contract = new ethers.Contract(×××××××_ADDRESS, ABI, provider);
        const accounts = await provider.listAccounts();
        if (accounts[0]) {
          const bal = await contract.balanceOf(accounts[0].address);
          setBalance(ethers.formatEther(bal));
        }
      }
    };
    check();
    const interval = setInterval(check, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ marginVertical: 20, alignItems: 'center' }}>
      <Text style={{ color: '#0ff', fontSize: 24, fontWeight: 'bold' }}>
        SOLDE ××××××× : {parseFloat(balance).toFixed(2)}
      </Text>
    </View>
  );
}