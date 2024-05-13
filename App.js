import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Appbar, PaperProvider, Button, Text } from 'react-native-paper';

const MyComponent = () => {
  const [altura, setAltura] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [resultado, setResultado] = React.useState(null);

  const calculoIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const imc = parseFloat(peso) / (alturaMetros * alturaMetros);
    const imcArredondado = imc.toFixed(2);
    setResultado(imcArredondado);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10
    },
    marginTop10: {
      marginTop: 10
    },
    marginTop30: {
      marginTop: 30
    },
    resultadoText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20
    }
  });

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Calculadora de IMC" />
        </Appbar.Header>
        <TextInput
          label="Altura (cm)"
          value={altura}
          onChangeText={text => setAltura(text)}
          keyboardType="numeric"
        />
        <TextInput style={styles.marginTop10}
          label="Peso (kg)"
          value={peso}
          onChangeText={text => setPeso(text)}
          keyboardType="numeric"
        />
        <Button style={styles.marginTop30} icon="" mode="contained" onPress={calculoIMC}>
          Calcular IMC
        </Button>
        {resultado && (
          <Text style={styles.resultadoText}>
            Seu IMC é: {resultado}
          </Text>
        )}
      </View>
    </PaperProvider>
  );
};

export default MyComponent;