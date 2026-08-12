import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { api } from '../../services/api';
import { styles } from './styles';
import { ViaCEPResponse } from '../../types/cep';
import { AddressInfo } from '../../components/AddressInfo';

export function Home() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState<ViaCEPResponse | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');

  function digitarCep(textoDigitado: string) {
    let numerosApenas = '';

    for (let i = 0; i < textoDigitado.length; i++) {
      const letra = textoDigitado[i];
      if (letra >= '0' && letra <= '9') {
        numerosApenas = numerosApenas + letra;
      }
    }

    if (numerosApenas.length > 8) {
      numerosApenas = numerosApenas.substring(0, 8);
    }

    setCep(numerosApenas);
  }

  function buscarEndereco() {
    if (cep.length !== 8) {
      setMensagemErro('Digite um CEP com 8 números.');
      return;
    }

    setMensagemErro('');
    setEndereco(null);
    setCarregando(true);

    api
      .get(cep + '/json/')
      .then(function (resposta) {
        if (resposta.data.erro) {
          setMensagemErro('CEP não encontrado.');
        } else {
          setEndereco(resposta.data);
        }
      })
      .catch(function () {
        setMensagemErro('Não foi possível buscar. Verifique sua conexão.');
      })
      .finally(function () {
        setCarregando(false);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de CEP</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o CEP (somente números)"
        keyboardType="numeric"
        maxLength={8}
        value={cep}
        onChangeText={digitarCep}
      />

      <Button title="Buscar" onPress={buscarEndereco} disabled={carregando} />

      {carregando === true && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0066cc" />
        </View>
      )}

      {mensagemErro !== '' && carregando === false && (
        <Text style={styles.errorText}>{mensagemErro}</Text>
      )}

      <AddressInfo data={endereco} />
    </View>
  );
}