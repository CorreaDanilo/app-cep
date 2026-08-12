import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { api } from '../../services/api';
import { styles } from './styles';

export function Home() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState<any>(null);

  function buscarEndereco() {
    api.get(cep + '/json/').then(function (resposta) {
      setEndereco(resposta.data);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de CEP</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
      />

      <Button title="Buscar" onPress={buscarEndereco} />

      {endereco && (
        <Text>
          {endereco.logradouro}, {endereco.localidade} - {endereco.uf}
        </Text>
      )}
    </View>
  );
}