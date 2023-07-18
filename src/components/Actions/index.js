import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddGastos from '../AddGastos';

const Stack = createStackNavigator();

export default function Actions() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Actions" component={ActionsScreen} />
          <Stack.Screen name="AddGastos" component={AddGastos} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function ActionsScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('AddGastos')}
      >
        <View style={styles.areaButton}>
          <AntDesign name="pluscircle" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Add Gastos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="minuscircle" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Remover Gastos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="calendar" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Historico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="linechart" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Estatistica</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 45,
  },
  areaButton: {
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
