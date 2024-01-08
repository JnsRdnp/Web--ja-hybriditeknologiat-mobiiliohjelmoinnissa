import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const [euros,setEuros] = useState('');
  const [pounds,setPounds] = useState(0);

  const convertCurrency = (euro) => {
    setPounds(euro*0.86);
  }
   

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Euros</Text>
      <TextInput 
        style={styles.field}

        value={euros}
        onChangeText={text => setEuros(text)}
        keyboardType='decimal-pad'>
      </TextInput>

      <Text style={styles.field}>Pounds</Text>
      <Text style={styles.field}>{pounds.toFixed(2)}</Text>

      <Button title='Calculate' onPress={() => convertCurrency(euros)}></Button>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //x
    alignItems: 'center',
    //y
    justifyContent: 'center',
  },
  field:{
    marginBottom : '5%',

  }
});
