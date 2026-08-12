import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';

export function Home() {
  const [cep, setCep] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de CEP</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
      />

      <Button title="Buscar" onPress={() => {}} />
    </View>
  );
}