import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Provider as PaperProvider, Button, Appbar } from 'react-native-paper';

export default function App() {
  const [input, setInput] = useState('');
  const [operation, setOperation] = useState(null);
  const [firstNumber, setFirstNumber] = useState(null);
  const [result, setResult] = useState(null);
  const handleNumberPress = (num) => {
    setInput(input + num);
  };
  const handleOperationPress = (op) => {
    if (input) {
      setFirstNumber(parseFloat(input));
      setOperation(op);
      setInput('');
    }
  };
  const handleEqualsPress = () => {
    if (input && operation && firstNumber !== null) {
      const secondNumber = parseFloat(input);
      let tempResult;
      switch (operation) {
        case '+':
          tempResult = firstNumber + secondNumber;
          break;
        case '-':
          tempResult = firstNumber - secondNumber;
          break;
        case '*':
          tempResult = firstNumber * secondNumber;
          break;
        case '/':
          tempResult = secondNumber !== 0 ? firstNumber / secondNumber : 'Erro: Divisão por zero';
          break;
        default:
          tempResult = 'Operação inválida';
        }
      setResult(tempResult);
      setInput('');
      setFirstNumber(null);
      setOperation(null);
    }
  };
  const handleClear = () => {
    setInput('');
    setFirstNumber(null);
    setOperation(null);
    setResult(null);
  };
  return (
    <PaperProvider>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Calculadora" />
        </Appbar.Header>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Calculadora</Text>
        <View style={styles.display}>
          <Text style={styles.displayText}>{input || (result !== null ? result : '0')}</Text>
        </View>
          <View style={styles.buttonContainer}>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((num) => (
              <Button
                mode="contained"
                onPress={() => handleNumberPress(num)}
                style={styles.button}
                key={num}
              >
              {num}
              </Button>
              ))}
        </View>
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={() => handleOperationPress('+')} style={styles.button}>+</Button>
            <Button mode="contained" onPress={() => handleOperationPress('-')} style={styles.button}>-</Button>
            <Button mode="contained" onPress={() => handleOperationPress('*')} style={styles.button}>*</Button>
            <Button mode="contained" onPress={() => handleOperationPress('/')} style={styles.button}>/</Button>
          </View>
            <View style={styles.buttonContainer}>
              <Button mode="contained" onPress={handleEqualsPress} style={styles.button}>=</Button>
              <Button mode="contained" onPress={handleClear} style={styles.button}>C</Button>
          </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
    },
    display: {
      marginBottom: 20,
      padding: 10,
      backgroundColor: '#ffffff',
      borderRadius: 5,
      elevation: 2,
    },
    displayText: {
      fontSize: 36,
      textAlign: 'right',
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 10,
    },
    button: {
      margin: 5,
      flexBasis: '22%',
    },
  }
);
