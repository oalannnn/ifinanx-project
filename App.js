import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from '../AppFinancasProject/src/components/Header'
import Balance from '../AppFinancasProject/src/components/Balance'
import Movements from '../AppFinancasProject/src/components/Movements'
import Actions from '../AppFinancasProject/src/components/Actions'
import AddGastos from './src/components/AddGastos'

const list = [
  {
    id: 1,
    label: 'Boleto Conta Luz',
    value: '100,00',
    date: '25/12/1995',
    type: 0 // receita / entrada
  },
  {
    id: 2,
    label: 'Boleto Conta Agua',
    value: '50,00',
    date: '25/12/1995',
    type: 0, // receita / entrada
  },
  {
    id: 3,
    label: 'Salario',
    value: '596,00',
    date: '25/12/1995',
    type: 1 // receita / entrada
  },

  {
    id: 3,
    label: 'Salario',
    value: '596,00',
    date: '25/12/1995',
    type: 1 // receita / entrada
  }

]

export default function App() {
  return (
    <View style={styles.container}>
      
        <Header name="Alan Almeida" />
        <Balance saldo="10.000.00" gastos="1.000.00"/>
     


      <Actions/>

      <Text style={styles.title}>Ultimas Movimentacoes</Text>

      
      <FlatList 
      style={styles.list}
      data={list}
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Movements data={item}/> }
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
   margin: 14,

  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  },
 ocultar:{
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: '#DADADA',
    borderRadius: 6,
}
});
