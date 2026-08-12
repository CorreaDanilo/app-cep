import React from 'react';
import { View, Text } from 'react-native';
import { ViaCEPResponse } from '../../types/cep';
import { styles } from './styles';

interface AddressInfoProps {
  data: ViaCEPResponse | null;
}

export function AddressInfo({ data }: AddressInfoProps) {
  // Se ainda não houver consulta feita, o componente não renderiza nada
  if (!data) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Rua:</Text>
        <Text style={styles.value}>{data.logradouro || 'Não informado'}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Bairro:</Text>
        <Text style={styles.value}>{data.bairro || 'Não informado'}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Cidade:</Text>
        <Text style={styles.value}>{data.localidade}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>UF:</Text>
        <Text style={styles.value}>{data.uf}</Text>
      </View>
    </View>
  );
}