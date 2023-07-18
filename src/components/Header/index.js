import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight ? Constants.statusBarHeight + 22 : 64;

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text>

        <Image source={require('/Users/alan/AppFinancasProject/src/imagem/logo.png')} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#FFF" />
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#65167f',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    width: 150, // Defina a largura desejada para a logo
    height: 50, // Defina a altura desejada para a logo
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2,
  },
});
