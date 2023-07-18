import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddGastos() {
  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');

  const handleLabelChange = (text) => {
    setLabel(text);
  };

  const handleValueChange = (text) => {
    setValue(text);
  };

  const handleDateChange = (text) => {
    setDate(text);
  };

  const handleSubmit = () => {
    // Lógica para manipular o envio do formulário
    console.log('Label:', label);
    console.log('Value:', value);
    console.log('Date:', date);
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Label"
        value={label}
        onChangeText={handleLabelChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Value"
        value={value}
        onChangeText={handleValueChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={handleDateChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 16,
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
