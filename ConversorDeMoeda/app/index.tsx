import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Keyboard } from 'react-native';

const ConversorMoedas = () => {
  const [valorBRL, setValorBRL] = useState('');
  const [valorUSD, setValorUSD] = useState('');

  const converterMoeda = () => {
    Keyboard.dismiss();
    const taxaCambio = 0.19; // taxa de câmbio (1 BRL = 0.19 USD). Pode variar
    const valorConvertido = parseFloat(valorBRL) * taxaCambio;
    setValorUSD(valorConvertido.toFixed(2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Conversor de Moedas</Text>

      <View style={styles.converterSection}>
        <Text style={styles.sectionTitle}>Converter valor R$ em US$</Text>

        <View style={styles.inputGroup}>
          <TextInput
            style={styles.textInput}
            placeholder="Digite o valor em R$"
            keyboardType="numeric"
            value={valorBRL}
            onChangeText={setValorBRL}
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.converterBox}>
          <Text style={styles.convertedValue}>
            {valorUSD ? `US$ ${valorUSD}` : 'Valor convertido'}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={converterMoeda}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.clearButton} onPress={() => { setValorBRL(''); setValorUSD(''); }}>
        <Text style={styles.clearButtonText}>Limpar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    marginTop: 10,
  },
  converterSection: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 50,
  },
  flagIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#2c3e50',
  },
  converterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    height: 50,
  },
  convertedValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  button: {
    width: '90%',
    backgroundColor: '#3498db',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearButton: {
    width: '100%',
    backgroundColor: 'transparent',
    paddingVertical: 10,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#95a5a6',
    fontSize: 16,
  },
});

export default ConversorMoedas;